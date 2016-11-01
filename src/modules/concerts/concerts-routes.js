export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.concerts', {
        url: '/concerts?{page:string}',
        template: require('./templates/concerts.html'),
        controller: 'ConcertsController',
        controllerAs: 'vm',
        params: {
            page: {
                value: '1',
                squash: true
            }
        }
    });
}
