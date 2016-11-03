export default ['$resource', InfoResource];

function InfoResource($resource) {

    var clips = $resource('static/data/clips.json', {}, {
        get: {
            isArray: true
        }
    });

    this.get = clips.get;
}