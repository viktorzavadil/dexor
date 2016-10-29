import './templates/concerts.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import apiModule from '../api/api-module.js';

import routes from './concerts-routes';
import ConcertsController from './ConcertsController.js';

export default angular.module('app.concerts', [uiRouter, ngMaterial, apiModule])
    .config(routes)
    .controller('ConcertsController', ConcertsController)
    .name;
