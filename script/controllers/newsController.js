/**
 * Created by niraj_kumar_chauhan on 20-03-2016.
 */
(function () {
    var news = angular.module('news', []);
    news.controller('newsController', ['$scope', '$newsService', function ($scope, $newsService) {

        var formdata = new FormData();
        $scope.getTheFiles = function ($files) {

            angular.forEach($files, function (value, key) {
                formdata.append('uploads', value);
            });

        };


        $scope.addNews = function (news) {
            $newsService.upload(formdata).then(function(result){
                news.img_name = result.message.url;
                $newsService.createNews(news).then(function(result){
                    alert("News Created Successfully");
                    console.log(result);
                },function(error){
                    alert("Unable To Create News");
                    console.log(error);
                })
            },function(error){
                alert("Upload Fails!!!");
                console.log(error);
            })
        }

    }])
})();
