
var UserDetailsController = function($routeParams, userService, albumService) {
    
    var store = this;

    this.loading = false;
    this.user = userService.get({id: $routeParams.id});
    this.albums = [];

    this.showAlbums = function() {
        this.loading = true;
        albumService.query({user_id: this.user.id}).$promise.then(function(data) {
            store.albums = data;
            store.loading = false;
        });
    }
}

module.exports = UserDetailsController;