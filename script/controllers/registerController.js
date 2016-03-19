/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
( function(){
    var register = angular.module('register',[]);

    register.controller('registerController',[ '$rootScope','$scope', function($rootScope,$scope){

        $rootScope.bodyLayout = 'hold-transition register-page';
        console.log('Register Controller');


    }]);

})();