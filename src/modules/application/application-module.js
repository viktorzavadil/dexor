import './templates/layout.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import routes from './application-routes';
import ApplicationController from './ApplicationController';

export default angular.module('app.main', [uiRouter, ngMaterial])
    .config(routes)
    .controller('ApplicationController', ApplicationController)
    .name;
