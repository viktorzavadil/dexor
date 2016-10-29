export default ['$stateProvider', function routes($stateProvider) {
    $stateProvider.state('app.home', {
        url: '/',
        template: require('./templates/home.html'),
        controller: 'HomeController',
        controllerAs: 'vm',
        title: 'DEXOR - úvod'
    });
}];
