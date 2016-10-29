export default function ApplicationController($mdSidenav) {

    var self = this;

    self.toggleSidenav = toggleSidenav;

    function toggleSidenav() {
        $mdSidenav('sidenav').toggle();
    }
};
