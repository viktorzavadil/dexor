'use strict';

export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.shop', {
        url: '/eshop?orderConsumed',
        template: require('./templates/shop.html'),
        controller: 'shopController',
        controllerAs: 'vm'
    });
}
