'use strict';

export default ['$scope', '$sce', 'clipsResource', ClipsController];

function ClipsController($scope, $sce, clipsResource) {

    const Rx = require('rx');

    var self = this;
    self.clips = [];

    activate();

    function activate() {
        Rx.Observable
            .of(Rx.Observable.fromPromise(clipsResource.query().$promise))
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
