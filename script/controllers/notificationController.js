/**
 * Created by niraj_kumar_chauhan on 20-03-2016.
 */
(function(){

    webpanel.controller('notificationController',['$scope', '$notification', function($scope,$notification){

        $scope.push = function(notification){
            notification.type = 'android';
            $notification.push(notification)
        }
    }]);

})();