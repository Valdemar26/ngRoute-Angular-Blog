angular.module(
    'app'
).controller('notFoundCtrl', ['$scope',
    function ($scope) {
        $scope.model = {
            message: 'Error 404. Not found',
            image: 'image/404.jpg'
        }
    }
]);
