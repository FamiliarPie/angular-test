
var AlbumService = function($resource, config) {
    return $resource(config.URL_ROOT + '/users/:user_id/albums', {}, {
        query: { method: 'GET', isArray: true },
        queryPhotos: { method: 'GET', isArray: true, url: config.URL_ROOT + '/album/:album_id/photos' }
    });
}

module.exports = AlbumService;