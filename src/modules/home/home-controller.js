'use strict';

export default ['$scope', '$sce', 'infoResource', HomeController];

function HomeController($scope, $sce, infoResource) {

    const Rx = require('rx');

    var self = this;

    activate();

    function activate() {
        Rx.Observable
            .of(Rx.Observable.fromPromise(infoResource.get().$promise))
            .merge(1)
            .flatMap(Rx.Observable.from)
            .map(sanitize)
            .toArray()
            .subscribe(resolve);

        function sanitize(item) {
            if (item.youtube) {
                item.youtube = $sce.trustAsResourceUrl(item.youtube);
            }
            if (item.image) {
                item.image = $sce.trustAsResourceUrl(item.image);
            }
            return item;
        }

        function resolve(data) {
            self.items = data;
            $scope.$apply();
        }
    }
}
