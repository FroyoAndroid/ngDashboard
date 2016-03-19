/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
(function () {
    var dashboard = angular.module('dashboard', []);
    dashboard.controller('dashboardController', ['$rootScope', '$scope', 'users', function ($rootScope, $scope, users) {

        $rootScope.bodyLayout = 'hold-transition skin-blue layout-top-nav';
        $rootScope.sectionTitle = "Users";
        $rootScope.users = users.all();
        $rootScope.usermenu = true;

    }]);
})();