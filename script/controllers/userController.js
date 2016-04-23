/**
 * Created by niraj_kumar_chauhan on 24-03-2016.
 */
(function(){
    webpanel.controller('userController',['$rootScope','$scope','$users', function($rootScope,$scope,$users){

        (function() {
            var data = $users.all();

            data.then(function (success) {
                $scope.users = success.data;
            }, function (error) {
                alert("error fetching results");
            });
        }());

        $scope.approve = function(index){
            $scope.users[index].role = "AGENT";
            $users.setRole($scope.users[index]);
        };

        $scope.reject = function(index){
            $scope.users[index].role = "GENERAL";
            $users.setRole($scope.users[index]);
        };

        $scope.delete = function(index){

        };

    }])
})();