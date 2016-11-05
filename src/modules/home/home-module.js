'use strict';

import './templates/home.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

import routes from './home-routes';
import HomeController from './home-controller.js';
import apiModule from '../api/api-module.js';

export default angular.module('app.home', [uiRouter, ngMaterial, ngSanitize, apiModule])
    .config(routes)
    .controller('HomeController', HomeController)
    .name;
