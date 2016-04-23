/**
 * Created by niraj_kumar_chauhan on 24-03-2016.
 */
(function(){
    webpanel.controller('userController',['$rootScope','$scope','$users', 'sweet', function($rootScope,$scope,$users,sweet){

        (function() {
            var data = $users.all();

            data.then(function (success) {
                $scope.users = success.data;
            }, function (error) {
                alert("error fetching results");
            });
        }());

        $scope.approve = function(index){
            if($scope.users[index].role !== "AGENT"){
                $scope.users[index].role = "AGENT";
                $users.setRole($scope.users[index]);
            }
        };

        $scope.reject = function(index){
            if($scope.users[index].role !== "GENERAL") {
                $scope.users[index].role = "GENERAL";
                $users.setRole($scope.users[index]);
            }
        };

        $scope.delete = function(index){
            if($scope.users[index].role !== "BANNED") {
                sweet.show({
                    title: 'Confirm',
                    text: 'Ban this user?\n All comments related to this user will get deleted and will not be able to upload,comment,like.',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, do it!',
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        $scope.users[index].role = "BANNED";
                        var requestStatus = $users.setRole($scope.users[index]);
                        requestStatus.then(function (success) {
                            if (success.status === "success") {
                                sweet.show('Banned!', 'User has been banned', 'success');
                            } else {
                                sweet.show('Error', 'Unable to ban user.', 'error');
                                console.log(success);
                            }
                        }, function (error) {
                            sweet.show('Error', 'Unable to ban user.', 'error');
                        });


                    } else {
                        sweet.show('Cancelled', 'Your user is safe :)', 'error');
                    }
                });
            }
        };

    }])
})();