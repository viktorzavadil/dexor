import './templates/home.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import routes from './home-routes';
import HomeController from './HomeController';

export default angular.module('app.home', [uiRouter, ngMaterial])
    .config(routes)
    .controller('HomeController', HomeController)
    .name;
