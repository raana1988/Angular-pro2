var app=angular.module("myForm",[]);
app.controller("myC",function($scope){

	$scope.list=[];
	$scope.text='test';
	$scope.submit = function(){
		if($scope.text){
			$scope.list.push(this.text);
			$scope.text='';

		}
	}
});