/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
(function () {
    var menu = angular.module('menu', []);
    menu.controller('menuController', ['$rootScope', '$scope', 'users', 'posts', function ($rootScope, $scope, users, posts) {

        $scope.usermenu = function () {
            $rootScope.sectionTitle = "Users";
            $rootScope.users = users.all();
            $rootScope.menu = "user";
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
        }

    }]);
})();
