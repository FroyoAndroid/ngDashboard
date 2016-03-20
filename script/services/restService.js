/**
 * Created by niraj_kumar_chauhan on 19-03-2016.
 */
(function () {
    // var api = angular.module('amasiApi', ['$http']);
    webpanel.factory('users', function () {

        //Some fake testing data
        var users = [
            {
                "id": "1",
                "name": "ABC4",
                "role": "APP USR",
                "profile_img": "dist/img/user1-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "2",
                "name": "ABC1",
                "role": "APP USR",
                "profile_img": "dist/img/user6-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "3",
                "name": "ABC2",
                "role": "AGENT",
                "profile_img": "dist/img/user3-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "4",
                "name": "ABC2",
                "role": "APP USR",
                "profile_img": "dist/img/user5-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "1",
                "name": "ABC4",
                "role": "APP USR",
                "profile_img": "dist/img/user1-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "2",
                "name": "ABC1",
                "role": "APP USR",
                "profile_img": "dist/img/user6-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "3",
                "name": "ABC2",
                "role": "AGENT",
                "profile_img": "dist/img/user3-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "4",
                "name": "ABC2",
                "role": "APP USR",
                "profile_img": "dist/img/user5-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "1",
                "name": "ABC4",
                "role": "APP USR",
                "profile_img": "dist/img/user1-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "2",
                "name": "ABC1",
                "role": "APP USR",
                "profile_img": "dist/img/user6-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "3",
                "name": "ABC2",
                "role": "AGENT",
                "profile_img": "dist/img/user3-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
            },
            {
                "id": "4",
                "name": "ABC2",
                "role": "APP USR",
                "profile_img": "dist/img/user5-128x128.jpg",
                "email": "abc@gmail.com",
                "city": "California"
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

    webpanel.factory('$event', function ($http, $q, CREATE_EVENT) {
        var createEvent = function (event) {
            var deferred = $q.defer();
            $http.post(CREATE_EVENT, event).success(function (success) {
                deferred.resolve(success);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        return {
            createEvent: createEvent
        }
    })

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
    })


})();