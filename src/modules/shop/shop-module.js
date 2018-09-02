'use strict';

import './templates/shop.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import localStorageModule from 'angular-local-storage';

import routes from './shop-routes';
import ShopController from './shop-controller.js';
import OrderDialogController from './order-dialog-controller.js';
import apiModule from '../api/api-module.js';

export default angular.module('app.shop', [uiRouter, ngMaterial, apiModule, localStorageModule])
    .config(routes)
    .controller('shopController', ShopController)
    .controller('orderDialogController', OrderDialogController)
    .name;
