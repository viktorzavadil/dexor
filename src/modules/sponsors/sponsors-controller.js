'use strict';

export default ['$scope', 'sponsorsResource', ContactsController];

function ContactsController($scope, sponsorsResource) {

    const Rx = require('rx');

    var self = this;

    activate();

    function activate() {
        Rx.Observable
            .of(Rx.Observable.fromPromise(sponsorsResource.get().$promise))
            .merge(1)
            .subscribe(resolve);

        function resolve(data) {
            self.sponsors = data;
            $scope.$apply();
        }
    }
}
