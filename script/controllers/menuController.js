/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
(function () {
    var menu = angular.module('menu', []);
    menu.controller('menuController', ['$rootScope', '$scope', 'posts', function ($rootScope, $scope, posts) {

        $scope.usermenu = function () {
            $rootScope.sectionTitle = "Users";
            $rootScope.menu = "users";
            console.log('user-menu');
        };

        $scope.postmenu = function () {
            $rootScope.sectionTitle = "Posts";
            $rootScope.posts = posts.all();
            $rootScope.menu = "post";
            console.log('post-menu');
        };

        $scope.eventmenu = function () {
            $rootScope.sectionTitle = "Events";
            $rootScope.menu = "event";
            console.log('event-menu');
        };

        $scope.newsmenu = function () {
            $rootScope.sectionTitle = "News";
            $rootScope.menu = "news";
            console.log('news-menu');
        };

        $scope.videomenu = function () {
            $rootScope.sectionTitle = "Upload Video";
            $rootScope.menu = "video";
            console.log('video-menu');
        };

        $scope.premiummenu = function(){
            $rootScope.sectionTitle = "Upload Video to Selected Category";
            $rootScope.menu = "premium";
            console.log('video-menu');
        };


        $scope.pushmenu = function(){
            $rootScope.sectionTitle = "Send Push Notification";
            $rootScope.menu = "notification";
            console.log('notification-menu');
        }

    }]);
})();
