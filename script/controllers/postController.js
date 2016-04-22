/**
 * Created by niraj_kumar_chauhan on 21-04-2016.
 */
(function() {

    webpanel.controller('postController', ['$scope', '$videoService', function ($scope, $videoService) {
        $scope.showList = function(){
            var data = $videoService.showPendingVideos();
            data.then(function(success){
                if(success.status === "success"){
                    console.log("PostController",success.data);
                    $scope.videos = success.data;
                }else{
                    console.log("PostController",success.data);
                }
            },function(error){
                //
                console.log("PostController",error);
            })
        }

        $scope.showPending = function(){
            $scope.status = "PENDING";
        }
    }])

}());