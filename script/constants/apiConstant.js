/**
 * Created by niraj_kumar_chauhan on 20-03-2016.
 */
(function(){

    var api = angular.module('apiConstant',[]);
    api.constant('CREATE_EVENT','http://amasilive.com/api/public/index.php/create/event');
    api.constant('CREATE_NEWS','http://amasilive.com/api/public/index.php/create/news');
    api.constant('UPLOAD_FILE','http://amasilive.com/api/public/index.php/upload');
    api.constant('CREATE_POST','http://amasilive.com/api/public/index.php/create/post');
    api.constant('GET_EVENTS','http://amasilive.com/api/public/index.php/events');
    api.constant('GET_USERS','http://amasilive.com/api/public/index.php/users');
    api.constant('EDIT_USER_ROLE','http://amasilive.com/api/public/index.php/edit/role/user');
    api.constant('PUSH','http://amasilive.com/api/public/index.php/push');

})();