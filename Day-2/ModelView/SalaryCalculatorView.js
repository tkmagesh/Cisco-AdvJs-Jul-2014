function SalaryCalculatorView(model){
	var $root = this.$root = $("<div>");

	//constructor
	this.initialize = function(){
		/*Subscribe to UI Events*/
		this.$root.on('change',"#txtBasic", function(){
			model.set('basic', parseInt(this.value,10));
		});

		this.$root.on('change',"#txtHra",function(){
			model.set('hra',parseInt(this.value,10));
		});
		this.$root.on('change',"#txtDa",function(){
			model.set('da', parseInt(this.value,10));
		});
		this.$root.on('change',"#rangeTax",function(){
			model.set('tax', parseInt(this.value,10));
		});

		this.$root.on('click',"#btnCalculate",function(){
			model.calculate();
		});

		/*Subscribe to Model Changes*/
		model.addSubscriber('basic',function(value){
			$("#txtBasic", $root).val(value);
		});
		model.addSubscriber('hra',function(value){
			$("#txtHra", $root).val(value);
		});
		model.addSubscriber('da',function(value){
			$("#txtDa", $root).val(value);
		});
		model.addSubscriber('tax',function(value){
			$("#rangeTax", $root).val(value);
			$("#spanTax", $root).html(value);
		});
		model.addSubscriber('salary', function(value){
			$("#divResult", $root).html(value);
		});

	}

	this.render = function(){
		$root.append($("#calculatorTemplate").html());
		return this;
	}
	this.remove = function(){
		this.$root.remove();
	}
}