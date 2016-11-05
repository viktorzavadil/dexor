'use strict';

export default ['$resource', ConcertsResource];

function ConcertsResource($resource) {

    var concerts = $resource('static/data/concerts.json', {}, {
        get: {
            isArray: true
        }
    });

    this.get = concerts.get;
}