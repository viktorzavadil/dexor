export default ['$scope', '$sce', 'clipsResource', ClipsController];

function ClipsController($scope, $sce, clipsResource) {
    var self = this;

    activate();

    function activate() {
        Rx.Observable
            .of(Rx.Observable.fromPromise(clipsResource.get().$promise))
            .merge(1)
            .flatMap(Rx.Observable.from)
            .map(sanitize)
            .toArray()
            .subscribe(resolve);

        function sanitize(item) {
            if (item.youtube) {
                item.youtube = $sce.trustAsResourceUrl(item.youtube);
            }
            return item;
        }

        function resolve(data) {
            self.clips = data;
            $scope.$apply();
        }
    }
}
