export default ['concertResource', ConcertsController];

function ConcertsController(concertResource) {
    var self = this;

    activate();

    function activate() {
        concertResource
            .get()
            .$promise
            .then(resolve);

        function resolve(data) {
            self.concerts = data;
        }
    }
}
