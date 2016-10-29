export default ['$stateProvider', function routes($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            template: require('./templates/layout.html'),
            controller: 'ApplicationController',
            controllerAs: 'vm',
            title: 'Dexor'
        });
}];