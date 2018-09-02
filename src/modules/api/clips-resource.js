'use strict';

class ClipsResource {

    constructor($resource) {
        this.clips = $resource('static/data/clips.json', {}, {
            get: {
                isArray: true
            }
        });
    }

    query() {
        return this.clips.get();
    }
}

ClipsResource.$inject = ['$resource'];

export default ClipsResource;
