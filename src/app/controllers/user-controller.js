
// Setup user controller
var UserController = function($location, userService) {
    
    var store = this;

    this.users = userService.query();  
    this.query = "";
    this.sortTerm = "name";

    this.showUser = function(user) {
        $location.path('user/' + user.id);
    }

    this.search = function(user) {
        var lowerQuery = store.query.toLowerCase()
        if (user.name.toLowerCase().indexOf(lowerQuery) != -1 ||
                user.email.toLowerCase().indexOf(lowerQuery) != -1 ||
                user.company.name.toLowerCase().indexOf(lowerQuery) != -1) {
            return true;
        }
        return false;
    };

    this.sort = function(column) {
        if (store.sortTerm === column) {
            store.sortTerm = '-' + column;
        }
        else {
            store.sortTerm = column;
        }
    }
}

module.exports = UserController;