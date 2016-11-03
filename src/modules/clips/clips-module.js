import './templates/clips.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

import routes from './clips-routes';
import ClipsController from './clips-controller.js';
import apiModule from '../api/api-module.js';

export default angular.module('app.clips', [uiRouter, ngMaterial, ngSanitize, apiModule])
    .config(routes)
    .controller('clipsController', ClipsController)
    .name;
