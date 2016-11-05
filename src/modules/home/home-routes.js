'use strict';

export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.home', {
        url: '/',
        template: require('./templates/home.html'),
        controller: 'HomeController',
        controllerAs: 'vm'
    });
}
