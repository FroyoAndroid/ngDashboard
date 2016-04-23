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
              if(result.status === "success"){
                post.video_src = result.message.url;
                $videoService.createPost(post).then(function(result){
                  if(result.status === "success"){
                      alert('Successfuly Uploaded and created video.');
                  }else{
                      alert("Fails!!!");
                      console.log('Error', result.message);
                  }
                },function(error){
                    alert("Upload Fails!!!");
                    console.log(error);
                })
              }else{
                console.log('Error: Uploading File', result.message);
                alert("Upload Failed!!!");
              }
            },function(error){
                alert("Upload Failed!!!");
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
