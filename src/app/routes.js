
var Routes = function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'users.html',
            controller: 'UserController',
            controllerAs: 'userCtrl'
        })
        .when('/user/:id', {
            templateUrl: 'user-details.html',
            controller: 'UserDetailsController',
            controllerAs: 'userCtrl'
        });
};

module.exports = Routes;