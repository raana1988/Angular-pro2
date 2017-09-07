
var app=angular.module("mainApp",[]);
app.controller("mainController",function($scope){

	$scope.title="learn angular js";

	$scope.users= [

	{'name':'raana','idCode':123456,'nationality':'Germany'},
	{'name':'Lara','idCode':568989,'nationality':'Canada'},
	{'name':'Tom','idCode':875432,'nationality':'USA'},
	{'name':'Marie','idCode':254656,'nationality':'Austeria'},
	{'name':'Katy','idCode':216575,'nationality':'Swiss'},
	{'name':'Mattias','idCode':368855,'nationality':'Swed'},
	{'name':'Alireza','idCode':147859,'nationality':'Denmark'},
	{'name':'Jonh','idCode':358985,'nationality':'France'}
]

});