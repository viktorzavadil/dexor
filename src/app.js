import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import 'angular-material/angular-material.css';


// import config functions
import appConfig from './app.config';
import application from './modules/application/application-module';
import home from './modules/home/home-module';
import stateHolder from './state-holder.js';

angular.module('app', [uiRouter, ngMaterial, application, home])
    .config(['$urlRouterProvider', '$locationProvider', '$mdThemingProvider', appConfig])
    .service('stateHolder', ['$rootScope', stateHolder])
    .run(['$rootScope', '$timeout', 'stateHolder', function ($rootScope, $timeout, stateHolder) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $timeout(function () {
                stateHolder.setCurrentStateName(toState.name);
            });
        });
    }]);
