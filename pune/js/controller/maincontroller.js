angular.module("myApp").controller("myCtrl",function($scope,$location){
	
$scope.pure=false;
$scope.click1 =  function(){
$location.path("/kanpur");
$scope.pure=true;
}

$scope.click2 = function(){
$location.path("/delhi");
}

$scope.click3 = function(){
$location.path("/pune");
}
$scope.click4 = function(){
$location.path("/update");
 }
 
 $scope.click5 = function(){
$location.path("/facebook");
 }
 
 $scope.click6 = function(){
$location.path("/responsive");
 }
 
});
