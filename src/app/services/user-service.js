
var UserService = function($resource, config) {
    return $resource(config.URL_ROOT + '/users/:id', {}, {
        query: { method: 'GET', isArray: true}
    });
}

module.exports = UserService;