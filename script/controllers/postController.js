/**
 * Created by niraj_kumar_chauhan on 21-04-2016.
 */
(function () {

    webpanel.controller('postController', ['$scope', '$videoService', function ($scope, $videoService) {
        $scope.showList = function () {
            var data = $videoService.showAllVideos();
            data.then(function (success) {
                if (success.status === "success") {
                    console.log("PostController", success.data);
                    $scope.videos = success.data;
                } else {
                    console.log("PostController", success.data);
                }
            }, function (error) {
                //
                console.log("PostController", error);
            })
        };

        $scope.showPending = function () {
            $scope.status = "PENDING";
        };

        $scope.approve = function (index, video_id) {
            var postData = {
                "post_id" : video_id,
                "status" : "APPROVED"
            };
            if($scope.videos[index].post_status !== "APPROVED"){
                var request = $videoService.changeStatus(postData);
                request.then(function(success){
                    if(success.status === "success"){
                        $scope.videos[index].post_status = "APPROVED";
                    }else{
                        alert("Can't process your request. Try again.")
                    }
                },function(error){
                    alert("Can't process your request. Try again.")
                });
            }

        };

        $scope.reject = function (index, video_id) {
            var postData = {
                "post_id" : video_id,
                "status" : "REJECTED"
            };
            if($scope.videos[index].post_status !== "REJECTED"){
                var request = $videoService.changeStatus(postData);
                request.then(function(success){
                    if(success.status === "success"){
                        $scope.videos[index].post_status = "REJECTED";
                    }else{
                        alert("Can't process your request. Try again.")
                    }
                },function(error){
                    alert("Can't process your request. Try again.")
                });
            }
        };

        $scope.delete = function (index, video_id) {
            var deletedVideo = $videoService.deleteVideo(video_id);
            deletedVideo.then(function (success) {
                if (success.status === "success") {
                    $scope.videos.splice(index, 1);
                } else {
                    alert("Something wrong!!! Unable to delete the video.");
                }
            }, function (error) {
                alert("Something wrong!!! Unable to delete the video.");
            });
            console.log($scope.videos[index]);

        };

        // showAllVideos
        $scope.showList();
    }])

}());