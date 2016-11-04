
// Configuration object to pass in to angular
angular.module('config', [])
    .factory('config', function() {
        return {
            URL_ROOT: 'https://jsonplaceholder.typicode.com'
        }
    });