angular.module(
    'app'
).controller('postCtrl', ['$scope', '$routeParams', 'postsFactory',
    function ($scope, $routeParams, postsFactory) {
        var postId = Number($routeParams.postId);
        $scope.post = _.findWhere(postsFactory, {id: postId});
    }
]);
