'use strict';

export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            template: require('./templates/layout.html'),
            controller: 'ApplicationController',
            controllerAs: 'vm'
        });
}