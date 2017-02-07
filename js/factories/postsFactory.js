angular.module(
    'app'
).factory('postsFactory', [
    function() {
        return [
            {
                id: 1,
                name: 'First post: About AngularJS',
                image: 'image/1.jpg',
                desc: 'AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries.'
            },
            {
                id: 2,
                name: 'Second post: Why AngularJS is cool?',
                image: 'image/2.jpg',
                desc: 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
            },
            {
                id: 3,
                name: 'Third post: AngularJS is easy to learn',
                image: 'image/3.jpg',
                desc: 'Ho ho ho :)'
            }
        ];
    }
]);
