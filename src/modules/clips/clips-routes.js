export default ['$stateProvider', routes];

function routes($stateProvider) {
    $stateProvider.state('app.clips', {
        url: '/clips',
        template: require('./templates/clips.html'),
        controller: 'clipsController',
        controllerAs: 'vm'
    });
}
