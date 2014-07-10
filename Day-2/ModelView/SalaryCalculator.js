/*function SalaryCalculator(basic,hra,da,tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;
	this.onSalaryChange = undefined;
}

SalaryCalculator.prototype.calculate = function(){
	var gross = this.basic + this.hra + this.da;
	this.salary = gross * ((100-this.tax)/100);
	if (typeof this.onSalaryChange === "function")
		this.onSalaryChange();
}*/

/* Evented Models */
function SalaryCalculator(defaults){
	var data = defaults || {};
	var that = this;
	this.get = function(attrName){
		return data[attrName];
	};
	this.set = function(attrName,value){
		data[attrName] = value;
		triggerSubscribers(attrName,value);
	};
	_subscribers = {};
	this.addSubscriber = function(attrName, subscriptionFn){
		_subscribers[attrName] = _subscribers[attrName] || [];
		_subscribers[attrName].push(subscriptionFn);
	};
	function triggerSubscribers(attrName){
		var subscriptions = _subscribers[attrName] || [];
		for(var i=0;i<subscriptions.length;i++)
			subscriptions[i].apply(that,Array.prototype.slice.call(arguments,1));
	};
	this.toJSON = function(){
		return JSON.stringify(data);
	}
}

SalaryCalculator.prototype.calculate = function(){
	var gross = this.get('basic') + this.get('hra') + this.get('da');
	var net = gross * ((100-this.get('tax'))/100);
	this.set('salary', net);
}