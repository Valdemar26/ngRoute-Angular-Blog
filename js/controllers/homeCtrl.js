angular.module(
    'app'
).controller('homeCtrl', ['$scope',
    function ($scope) {
        $scope.model = {
            message: 'This is my beautiful blog created on AngularJS',
            image: 'image/angular_js.svg'
        }
    }
]);
