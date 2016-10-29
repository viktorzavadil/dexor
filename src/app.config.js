export default function routing($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('grey');
};
