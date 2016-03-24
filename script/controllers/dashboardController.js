/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
(function () {
    var dashboard = angular.module('dashboard', []);
    dashboard.controller('dashboardController', ['$rootScope', '$scope', function ($rootScope, $scope) {

        $rootScope.bodyLayout = 'hold-transition skin-blue layout-top-nav';
        $rootScope.sectionTitle = "Users";
        $rootScope.menu = "users";

    }]);
})();