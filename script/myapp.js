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


webpanel.controller('dashboardController',[ '$rootScope','$scope','users', 'posts', function($rootScope,$scope,users,posts){

    //$rootScope.bodyLayout = 'skin-blue sidebar-mini';
    $rootScope.bodyLayout = 'hold-transition skin-blue layout-top-nav';
    $rootScope.sectionTitle = "Users";
    $rootScope.users = users.all();
    $rootScope.usermenu = true;

}]);

webpanel.controller('menuController',['$rootScope','$scope', 'users', 'posts',function($rootScope,$scope,users,posts){

    $scope.usermenu = function(){
        $rootScope.sectionTitle = "Users";
        $rootScope.users = users.all();
        $rootScope.usermenu = true;
        console.log('user-menu');
    };

    $scope.postmenu = function(){
        $rootScope.sectionTitle = "Posts";
        $rootScope.posts = posts.all();
        $rootScope.usermenu = false;
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


webpanel.factory('posts',function(){

    //Some fake testing data
    var users = [
        {
            "post_title" : "Code in CSS",
            "video_src" : "//www.youtube.com/embed/9B7te184ZpQ?rel=0",
            "date": "14 Feb 2016",
            "status" : "PENDING",
            "showbtn" : true
        },
        {
            "post_title" : "Code in JS",
            "video_src" : "//www.youtube.com/embed/9B7te184ZpQ?rel=0",
            "date": "14 Feb 2016",
            "status" : "APPROVED",
            "showbtn" : false
        },
        {
            "post_title" : "Mr x on fire",
            "video_src" : "//www.youtube.com/embed/9B7te184ZpQ?rel=0",
            "date": "14 Feb 2016",
            "status" : "REJECTED",
            "showbtn" : false
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