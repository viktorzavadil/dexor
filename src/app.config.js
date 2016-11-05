'use strict';

export default routing;

function routing($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('grey');
}
