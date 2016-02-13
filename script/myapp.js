var webpanel = angular.module('webpanel',['ngRoute']);

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

webpanel.controller('loginController',[ '$rootScope','$scope','$location', function($rootScope,$scope,$location){

    $rootScope.bodyLayout = 'hold-transition login-page';
    $scope.signin = function(user){

		if(user.email === "demo@gmail.com" && user.password === "password"){
            $location.path('/dashboard');
        }else{
            $scope.message = "Incorrect Credential! Try Again"
        }

    }

}]);

webpanel.controller('registerController',[ '$rootScope','$scope', function($rootScope,$scope){

    $rootScope.bodyLayout = 'hold-transition register-page';
    console.log('Register Controller');


}]);


webpanel.controller('dashboardController',[ '$rootScope','$scope','users', function($rootScope,$scope,users){

    //$rootScope.bodyLayout = 'skin-blue sidebar-mini';
    $rootScope.bodyLayout = 'hold-transition skin-blue layout-top-nav';
    $scope.users = users.all();

}]);

webpanel.controller('menuController',['$rootScope','$scope',function($rootScope,$scope){

    $scope.usermenu = function(){
        $rootScope.sectionTitle = "Users";
        console.log('user-menu');
    };

    $scope.postmenu = function(){
        $rootScope.sectionTitle = "Posts";
        console.log('post-menu');
    };
}]);

webpanel.factory('users',function(){

    //Some fake testing data
    var users = [
        {
            "id":"1",
            "name":"ABC4",
            "role": "APP USR",
            "profile_img": "dist/img/user1-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"2",
            "name":"ABC1",
            "role": "APP USR",
            "profile_img": "dist/img/user6-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"3",
            "name":"ABC2",
            "role": "AGENT",
            "profile_img":"dist/img/user3-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"4",
            "name":"ABC2",
            "role": "APP USR",
            "profile_img": "dist/img/user5-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"1",
            "name":"ABC4",
            "role": "APP USR",
            "profile_img": "dist/img/user1-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"2",
            "name":"ABC1",
            "role": "APP USR",
            "profile_img": "dist/img/user6-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"3",
            "name":"ABC2",
            "role": "AGENT",
            "profile_img":"dist/img/user3-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"4",
            "name":"ABC2",
            "role": "APP USR",
            "profile_img": "dist/img/user5-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"1",
            "name":"ABC4",
            "role": "APP USR",
            "profile_img": "dist/img/user1-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"2",
            "name":"ABC1",
            "role": "APP USR",
            "profile_img": "dist/img/user6-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"3",
            "name":"ABC2",
            "role": "AGENT",
            "profile_img":"dist/img/user3-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        },
        {
            "id":"4",
            "name":"ABC2",
            "role": "APP USR",
            "profile_img": "dist/img/user5-128x128.jpg",
            "email":"abc@gmail.com",
            "city":"California"
        }
    ];

    return {
        all: function() {
            return users;
        },
        get: function(chatId) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === parseInt(chatId)) {
                    return users[i];
                }
            }
            return null;
        }
    };

});