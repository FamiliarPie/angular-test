// Grab angular and modules
var angular = require('angular');
require('angular-router-browserify')(angular);
require('angular-resource');
require('angular-ui-bootstrap');

// Require our dependencies
var config = require('./config');

// Require our services
var UserService = require('./services/user-service');
var AlbumService = require('./services/album-service');

// Require our controllers
var UserController = require('./controllers/user-controller');
var UserDetailsController = require('./controllers/user-details-controller');
var AlbumController = require('./controllers/album-controller');
var PictureModalController = require('./controllers/picture-modal-controller');

// Require our directives
var AlbumGalleryDirective = require('./directives/album-gallery-directive');

// And our final las bits and pieces
var Routes = require('./routes.js');
var Modals = require('./modals.js');

// Initialise our angular app
var app = angular.module("app", ['config', 'ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(['$routeProvider', Routes]);
app.factory('Modals', ['$uibModal', Modals]);

// Add our services
app.service('UserService', ['$resource', 'config', UserService]);
app.service('AlbumService', ['$resource', 'config', AlbumService]);

// Add our controllers onto the app
app.controller('UserController', ['$location', 'UserService', UserController]);
app.controller('UserDetailsController', ['$routeParams', 'UserService', 'AlbumService', UserDetailsController]);
app.controller('PictureModalController', ['picture', PictureModalController]);
app.controller('AlbumController', ['$scope', 'AlbumService', 'Modals', AlbumController]);

// And finally our directive
app.directive('albumGallery', AlbumGalleryDirective);

app.filter('address', function() {
    return function(item) {
        return item ? [item.suite, item.street, item.city, item.zipcode].join(', ') : '';
    }
});
