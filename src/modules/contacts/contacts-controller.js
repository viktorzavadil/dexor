export default ['$scope', 'contactsResource', ContactsController];

function ContactsController($scope, contactsResource) {
    var self = this;

    activate();

    function activate() {
        Rx.Observable
            .of(Rx.Observable.fromPromise(contactsResource.get().$promise))
            .merge(1)
            .subscribe(resolve);

        function resolve(data) {
            self.contacts = data;
            $scope.$apply();
        }
    }
}
