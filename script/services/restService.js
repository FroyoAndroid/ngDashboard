/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
(function () {
    // var api = angular.module('amasiApi', ['$http']);
    webpanel.factory('$users', function ($http, $q, GET_USERS,EDIT_USER_ROLE) {

        var getUsers = function(){
            var deferred = $q.defer();
            $http.get(GET_USERS).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        var setRole = function(user){
            var deferred = $q.defer();
            $http.post(EDIT_USER_ROLE,user).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        return {
            all: getUsers,
            setRole: setRole
        };

    });

    webpanel.factory('posts', function () {

        //Some fake testing data
        var users = [
            {
                "post_title": "Code in CSS",
                "video_src": "//www.youtube.com/embed/9B7te184ZpQ?rel=0",
                "date": "14 Feb 2016",
                "status": "PENDING",
                "showbtn": true
            },
            {
                "post_title": "Code in JS",
                "video_src": "//www.youtube.com/embed/9B7te184ZpQ?rel=0",
                "date": "14 Feb 2016",
                "status": "APPROVED",
                "showbtn": false
            },
            {
                "post_title": "Mr x on fire",
                "video_src": "//www.youtube.com/embed/9B7te184ZpQ?rel=0",
                "date": "14 Feb 2016",
                "status": "REJECTED",
                "showbtn": false
            }
        ];

        return {
            all: function () {
                return users;
            },
            get: function (chatId) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === parseInt(chatId)) {
                        return users[i];
                    }
                }
                return null;
            }
        };

    });

    //event factory

    webpanel.factory('$event', function ($http, $q, CREATE_EVENT, GET_EVENTS) {
        var createEvent = function (event) {
            var deferred = $q.defer();
            $http.post(CREATE_EVENT, event).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        var getEvents = function(){
            var deferred = $q.defer();
            $http.get(GET_EVENTS).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        return {
            createEvent : createEvent,
            getEvents : getEvents
        }
    });

    webpanel.factory('$newsService', function ($http, $q, UPLOAD_FILE, CREATE_NEWS) {
        var upload = function (formdata) {
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: UPLOAD_FILE,
                data: formdata,
                headers: {
                    'Content-Type': undefined
                }
            };
            // SEND THE FILES.
            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        var createNews = function (news) {
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: CREATE_NEWS,
                data: news
            };
            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        return {
            upload: upload,
            createNews: createNews
        }
    });

    webpanel.factory('$videoService', function($http, $q, CREATE_POST, CREATE_PREMIUM_POST, PENDING_VIDEOS, POST_VIDEO_STATUS, DELETE_VIDEO){
        var createPost = function(post){
            var deferred = $q.defer();
            $http.post(CREATE_POST, post).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        var createPremiumPost = function(post){
            var deferred = $q.defer();
            $http.post(CREATE_PREMIUM_POST, post).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        var showVideos  = function(){
            var deferred = $q.defer();
            $http.get(PENDING_VIDEOS).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        var changeStatus = function(postData){
            var deferred = $q.defer();
            $http.post(POST_VIDEO_STATUS,postData).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        
        var deleteVideo = function(video_id){
            var deferred = $q.defer();
            $http.get(DELETE_VIDEO+video_id).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        
        return {
            createPost : createPost,
            createPremiumPost : createPremiumPost,
            showAllVideos : showVideos,
            changeStatus : changeStatus,
            deleteVideo : deleteVideo
        }
    });
    
    webpanel.factory('$notification',function($http, $q, PUSH){
        var _push = function(notification){
            var deferred = $q.defer();
            $http.post(PUSH, notification).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        return{
            push: _push
        }
    })

})();