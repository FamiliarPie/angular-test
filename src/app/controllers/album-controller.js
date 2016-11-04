
// Setup album controller
var AlbumController = function($scope, albumService, Modals) {
    
    var store = this;

    this.loaded = false;
    this.pictures = [];

    this.loadPictures = function() {
        if (!this.loaded) {
            albumService.queryPictures({album_id: $scope.album.id}).$promise.then(function(data) {
                store.pictures = data;
                store.loaded = true;
            });
        }
    }


    this.showPicture = function(picture) {
        Modals.picture($scope, { picture: function() { return picture; } });
    }    
}

module.exports = AlbumController;