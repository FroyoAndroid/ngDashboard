/**
 * Created by niraj_kumar_chauhan on 20-03-2016.
 */
(function(){

    var dir = angular.module('webpanel.directives',[])
    dir.directive('ngFiles', ['$parse', function ($parse) {

        function fn_link(scope, element, attrs) {
            var onChange = $parse(attrs.ngFiles);
            element.on('change', function (event) {
                onChange(scope, { $files: event.target.files });
            });
        };

        return {
            link: fn_link
        }
    } ])
})();