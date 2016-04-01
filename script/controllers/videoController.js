/**
 * Created by niraj_kumar_chauhan on 20-03-2016.
 */
(function(){

    webpanel.controller('videoController',['$scope', '$newsService', '$event', '$videoService' , function($scope,$newsService,$event,$videoService){

        var formdata = new FormData();
        $scope.getTheFiles = function ($files) {

            angular.forEach($files, function (value, key) {
                formdata.append('uploads', value);
            });

        };

        $scope.uploadVideo = function(post){
            console.log(post);
            $newsService.upload(formdata).then(function(result){
                post.video_src = result.message.url;

                // admin video will go to selected
                post.category = "SELECTED";
                $videoService.createPost(post).then(function(result){
                    alert('Video Uploaded');
                    console.log(result);
                },function(error){
                    alert("Upload Fails!!!");
                    console.log(error);
                })
            },function(error){
                alert("Upload Fails!!!");
                console.log(error);
            })
        };

        (function(){
            $event.getEvents().then(function(result){
                $scope.events = result.data;
            },function(error){
                console.log("Error",error);
            })
        })();

    }]);

})();