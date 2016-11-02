import ngResource from 'angular-resource';

import ConcertsResource from './concerts-resource.js';
import InfoResource from './info-resource.js';

export default angular.module('app.api', [ngResource])
    .service('concertResource', ConcertsResource)
    .service('infoResource', InfoResource)
    .name;