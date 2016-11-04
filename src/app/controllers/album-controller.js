
// Setup album controller
var AlbumController = function($scope, albumService, Modals) {
    
    var store = this;

    this.pictures = [];

    store.loading = true;
    
    albumService.queryPhotos({album_id: $scope.album.id}).$promise.then(function(data) {
        store.pictures = data;
        store.loading = false;
    });

    this.showPicture = function(picture) {
        Modals.picture($scope, { picture: function() { return picture; } });
    }    
}

module.exports = AlbumController;