import './templates/contacts.less';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import routes from './contacts-routes';
import ContactsController from './contacts-controller.js';
import apiModule from '../api/api-module.js';

export default angular.module('app.contacts', [uiRouter, ngMaterial, apiModule])
    .config(routes)
    .controller('contactsController', ContactsController)
    .name;
