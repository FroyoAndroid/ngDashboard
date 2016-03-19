/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
( function(){
    var login = angular.module('login',[]);

    login.controller('loginController',[ '$rootScope','$scope','$location', function($rootScope,$scope,$location){

        $rootScope.bodyLayout = 'hold-transition login-page';
        $scope.signin = function(user){

            if(user.email === "demo@gmail.com" && user.password === "password"){
                $location.path('/dashboard');
            }else{
                $scope.message = "Incorrect Credential! Try Again"
            }
        }

    }]);

})();
