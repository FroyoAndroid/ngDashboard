/**
 * Created by niraj_kumar_chauhan on 20-03-2016.
 */
(function () {
    var event = angular.module('event', []);
    event.controller('eventController', ['$rootScope', '$scope', '$event', function ($rootScope, $scope, $event) {

        $scope.addEvent = function (event) {
            console.log(event);
            var result = $event.createEvent(event);
            result.then(function (success) {
                alert("Event Created Successfully");
            }, function (error) {
                alert("We are facing issue creating event.Please fill the necessary details");
            })
        }

    }]);
})();