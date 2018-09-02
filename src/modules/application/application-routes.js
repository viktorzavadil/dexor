'use strict';

function routes($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

    $urlMatcherFactoryProvider.caseInsensitive(true);

    $urlRouterProvider
        .when('', '/')
        .otherwise(function($injector) {
            var $state = $injector.get('$state');
            $state.go('app.home');
        });

    $stateProvider
        .state('app', {
            abstract: true,
            template: require('./templates/layout.html'),
            controller: 'ApplicationController',
            controllerAs: 'vm'
        });
}

routes.$inject = ['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider'];

export default routes;