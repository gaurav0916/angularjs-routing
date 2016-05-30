var app=angular.module("myApp",['ngRoute']);
app.config (function($routeProvider,$locationProvider){
	
$routeProvider
.when('/kanpur',{
templateUrl:'view/kanpur.html',
controller: 'kanCtrl'
})

.when('/delhi',{
templateUrl:'view/delhi.html'
})

.when('/pune',{
templateUrl:'view/pune.html'
})

.when('/gaurav',{
templateUrl:'view/customForm.html'
})

.when('/update',{
templateUrl:'view/update.html'
})

.when('/facebook',{
templateUrl:'view/facebook.html'
})

.when('/responsive',{
templateUrl:'view/responsive.html'
})

.otherwise({
	redirectTo:'/delhi'
})

});
