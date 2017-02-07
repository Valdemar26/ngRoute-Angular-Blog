var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            templateUrl: 'html/posts.html',
            controller: 'postsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'html/post.html',
            controller: 'postCtrl'
        })
        .otherwise({
            templateUrl: 'html/404.html',
            controller: 'notFoundCtrl'
        })
});
