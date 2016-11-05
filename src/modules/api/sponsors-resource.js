'use strict';

export default ['$resource', SponsorsResource];

function SponsorsResource($resource) {

    var sponsors = $resource('static/data/sponsors.json', {}, {
        get: {
            isArray: true
        }
    });

    this.get = sponsors.get;
}