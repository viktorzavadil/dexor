'use strict';

class ApplicationController {

    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    toggleNavigation() {
        this.$mdSidenav('navigation').toggle();
    }
}

ApplicationController.$inject = ['$mdSidenav'];

export default ApplicationController;
