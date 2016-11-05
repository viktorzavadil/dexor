'use strict';

export default ['$resource', InfoResource];

function InfoResource($resource) {

    var info = $resource('static/data/info.json', {}, {
        get: {
            isArray: true
        }
    });

    this.get = info.get;
}