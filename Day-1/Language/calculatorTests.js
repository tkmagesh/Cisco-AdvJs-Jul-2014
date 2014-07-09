window.addEventListener("DOMContentLoaded",init);
function init(){
	test("Should be able to add two numbers", function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add numbers in string format", function(){
		//Arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to treat non numeric strings as zero", function(){
		//Arrange
		var number1 = "10",
			number2 = "abc",
			expectedResult = 10;

		//Act
		var result = add(number1,number2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able add juz one number", function(){
		//Arrange
		var number1 = "10",
			expectedResult = 10;

		//Act
		var result = add(number1);

		//Assert
		return result === expectedResult;
	});
	test("Should return zero when invoked with no arguments", function(){
		//Arrange
		var expectedResult = 0;

		//Act
		var result = add();

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add varying length of numbers", function(){
		//Arrange
		var expectedResult = 100;

		//Act
		var result = add(10,20,30,40);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return result === expectedResult;
	});

	test("Should be able to add functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "10";},
			f2 = function(){ return "20";},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add functions returning functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return function(){ return 10;};},
			f2 = function(){ return function(){ return 20;};},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add array of numbers", function(){
		//Arrange
		var numbers1 = [10,20],
			numbers2 = [30,40],
			expectedResult = 100;

		//Act
		var result = add(numbers1, numbers2);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add a nested array of numbers", function(){
		//Arrange
		var numbers1 = [10,[20,[30,[40]]]],
			expectedResult = 100;

		//Act
		var result = add(numbers1);

		//Assert
		return result === expectedResult;
	});
	test("Should be able to add an array of functions returning functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return function(){ return 10;};},
			f2 = function(){ return function(){ return 20;};},
			expectedResult = 30;

		//Act
		var result = add([f1,f2]);

		//Assert
		return result === expectedResult;
	});

}