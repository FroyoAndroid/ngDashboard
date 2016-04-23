/**
 * Created by niraj_kumar_chauhan on 21-04-2016.
 */
(function () {

    webpanel.controller('postController', ['$scope', '$videoService','sweet', function ($scope, $videoService,sweet) {
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
                sweet.show('Error', 'Can\'t process your request :(', 'error');
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
                        sweet.show('Error', 'Can\'t process your request :(', 'error');
                    }
                },function(error){
                    sweet.show('Error', 'Can\'t process your request :(', 'error');
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
                        sweet.show('Error', 'Can\'t process your request :(', 'error');
                    }
                },function(error){
                    sweet.show('Error', 'Can\'t process your request :(', 'error');
                });
            }
        };

        $scope.delete = function (index, video_id) {
            sweet.show({
                title: 'Confirm',
                text: 'Delete this Video?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                closeOnConfirm: false,
                closeOnCancel: false
            }, function(isConfirm) {
                if (isConfirm) {
                    var deletedVideo = $videoService.deleteVideo(video_id);
                    deletedVideo.then(function (success) {
                        if (success.status === "success") {
                            $scope.videos.splice(index, 1);
                            sweet.show('Deleted!', 'The video file has been deleted.', 'success');
                        } else {
                            sweet.show('Error', 'Unable to delete the video.', 'error');
                            console.log(success);
                        }
                    }, function (error) {
                        sweet.show('Error', 'Unable to delete the video.', 'error');
                    });
                    console.log($scope.videos[index]);

                }else{
                    sweet.show('Cancelled', 'Your video file is safe :)', 'error');
                }
            });
        };

        // showAllVideos
        $scope.showList();
    }])

}());