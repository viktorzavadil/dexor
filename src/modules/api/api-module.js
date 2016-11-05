'use strict';

import ngResource from 'angular-resource';
import angular from 'angular';

import ConcertsResource from './concerts-resource.js';
import InfoResource from './info-resource.js';
import ClipsResource from './clips-resource.js';
import ContactsResource from './contacts-resource.js';

export default angular.module('app.api', [ngResource])
    .service('concertResource', ConcertsResource)
    .service('infoResource', InfoResource)
    .service('clipsResource', ClipsResource)
    .service('contactsResource', ContactsResource)
    .name;