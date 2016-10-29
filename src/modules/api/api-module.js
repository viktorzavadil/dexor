import ngResource from 'angular-resource';

import ConcertsResource from './concerts-resource.js';

export default angular.module('app.api', [ngResource])
    .service('concertResource', ConcertsResource)
    .name;