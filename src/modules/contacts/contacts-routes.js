'use strict';

export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.contacts', {
        url: '/contacts',
        template: require('./templates/contacts.html'),
        controller: 'contactsController',
        controllerAs: 'vm'
    });
}
