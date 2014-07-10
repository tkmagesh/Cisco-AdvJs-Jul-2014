var products = [
	{id:6,name :"pen", cost:60, units:70, category:2},
	{id:2,name :"hen", cost:80, units:30, category:1},
	{id:9,name :"ten", cost:10, units:60, category:2},
	{id:4,name :"den", cost:90, units:20, category:1},
	{id:7,name :"len", cost:20, units:50, category:2},
	{id:5,name :"ken", cost:80, units:40, category:1}
];

function sort(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}
console.log("After sorting by id")
sort(products);
console.table(products);
var sort = function sort(list,attrName){
		for(var i=0;i<list.length-1;i++)
			for(var j=i+1;j<list.length;j++)
				if (list[i][attrName] > list[j][attrName]){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
	}
console.log("After sorting by cost")
sort(products,"cost");
console.table(products);

var sort = function sort(list,comparerFn){
		for(var i=0;i<list.length-1;i++)
			for(var j=i+1;j<list.length;j++)
				if (comparerFn(list[i],list[j]) > 0){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
	}

var productComparerByValue = function(p1,p2){
	return (p1.units * p1.cost) - (p2.units * p2.cost);
}



console.log("After sorting by product value (using the comparer function)")
//sort(products,productComparerByValue);

sort(products, function(p1,p2){
	return (p1.units * p1.cost) - (p2.units * p2.cost);
});


function filter(list,predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}

function filter(list,predicate){
	var seed = arguments[2] || [];
	if (list.length == 0) return seed;
	if (predicate(list[0])) seed.push(list[0]);
	return filter(list.slice(1),predicate,seed);
}

var category1Products = filter(products, function(p){ return p.category === 1});
console.log("All category-1 products");
console.table(category1Products)

var affordableProducts = filter(products, function(p){ return p.cost < 50;});
console.log("All affordable products (cost < 50)");
console.table(affordableProducts);

/*
	all - will check if all the items in the list satifies a predicate
	any - will check atleast if one item in the list satisfies a predicate
	countBy - number of items satisfies a predicate
*/

function all(list,predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i]))
			return false;
	return true;
}

function any(list,predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			return true;
	return false;
}

function countBy(list,predicate){
	var count = 0;
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			++count;
	return count;
}

function groupBy(list, selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]; },
		result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"},
]

function join(leftList, rightList, leftKeyName, rightKeyName, combinatorFn){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftKeyValue = leftList[i][leftKeyName];
		for(var j=0;j<rightList.length;j++){
			var rightKeyValue = rightList[j][rightKeyName];
			if (leftKeyValue === rightKeyValue){
				var resultObj = combinatorFn(leftList[i],rightList[j]);
				result.push(resultObj);
			}
		}
	}
	return result;
}

var productsWithCategoryNames = join(products,categories,"category","id",function(p,c){ 
    return { id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name };
});
console.table(productsWithCategoryNames);

