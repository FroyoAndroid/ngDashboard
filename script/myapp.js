var webpanel = angular.module('webpanel',[
    'ngRoute',
    'login',
    'dashboard',
    'register',
    'menu',
    'apiConstant',
    'event'
]);

webpanel.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});

webpanel.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/',{
                templateUrl: 'views/login.html',
                controller:'loginController'
            }).
            when('/dashboard', {
                templateUrl: 'views/test.html',
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

