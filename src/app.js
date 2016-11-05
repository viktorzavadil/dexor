'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import 'angular-material/angular-material.css';


// import config functions
import appConfig from './app.config';
import application from './modules/application/application-module';
import home from './modules/home/home-module';
import concerts from './modules/concerts/concerts-module';
import clips from './modules/clips/clips-module';
import contacts from './modules/contacts/contacts-module';
import sponsors from './modules/sponsors/sponsors-module';

angular.module('app', [uiRouter, ngMaterial, application, home, concerts, clips, contacts, sponsors])
    .config(['$urlRouterProvider', '$locationProvider', '$mdThemingProvider', appConfig]);
