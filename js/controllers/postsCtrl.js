angular.module(
    'app'
).controller('postsCtrl', ['$scope', 'postsFactory',
    function ($scope, postsFactory) {
        $scope.posts = postsFactory;
    }
]);
