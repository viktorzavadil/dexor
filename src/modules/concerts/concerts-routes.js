export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.concerts', {
        url: '/concerts',
        template: require('./templates/concerts.html'),
        controller: 'ConcertsController',
        controllerAs: 'vm'
    });
}
