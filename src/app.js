import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import 'angular-material/angular-material.css';


// import config functions
import appConfig from './app.config';
import application from './modules/application/application-module';
import home from './modules/home/home-module';
import concerts from './modules/concerts/concerts-module';

angular.module('app', [uiRouter, ngMaterial, application, home, concerts])
    .config(['$urlRouterProvider', '$locationProvider', '$mdThemingProvider', appConfig]);
