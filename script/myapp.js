var webpanel = angular.module('webpanel',['ngRoute']);

webpanel.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/',{
                templateUrl: 'views/login.html',
                controller:'loginController'
            }).
            when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboardController'
            }).
            when('/register', {
                templateUrl: 'views/register.html',
                controller: 'registerController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

webpanel.controller('loginController',[ '$rootScope','$scope','$location', function($rootScope,$scope,$location){

    $rootScope.bodyLayout = 'hold-transition login-page';
    $scope.signin = function(user){
       //console.log( user.email);
        $location.path('/dashboard');
    }

}]);

webpanel.controller('registerController',[ '$rootScope','$scope', function($rootScope,$scope){

    $rootScope.bodyLayout = 'hold-transition register-page';
    console.log('Register Controller');


}]);


webpanel.controller('dashboardController',[ '$rootScope','$scope', function($rootScope,$scope){

    $rootScope.bodyLayout = 'skin-blue sidebar-mini';
    console.log('Dashboard Controller');

}]);