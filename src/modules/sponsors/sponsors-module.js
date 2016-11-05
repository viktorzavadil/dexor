'use strict';

import './templates/sponsors.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import routes from './sponsors-routes';
import SponsorsController from './sponsors-controller.js';
import apiModule from '../api/api-module.js';

export default angular.module('app.contacts', [uiRouter, ngMaterial, apiModule])
    .config(routes)
    .controller('sponsorsController', SponsorsController)
    .name;
