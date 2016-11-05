'use strict';

export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.sponsors', {
        url: '/sponsors',
        template: require('./templates/sponsors.html'),
        controller: 'sponsorsController',
        controllerAs: 'vm'
    });
}
