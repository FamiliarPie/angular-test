
var Modals = function($uibModal) {
    return {
        picture: function(scope, resolve) {
            return $uibModal.open({
                templateUrl: 'picture-modal.html',
                controller: 'PictureModalController',
                controllerAs: 'pictureModalCtrl',
                scope: scope,
                resolve: resolve
            });
        }
    };
};

module.exports = Modals;