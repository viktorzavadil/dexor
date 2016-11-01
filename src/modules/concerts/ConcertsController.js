import Rx from 'rx';

export default ['$scope', '$state', '$stateParams', '$location', '$timeout', 'concertResource', ConcertsController];

function ConcertsController($scope, $state, $stateParams, $location, $timeout, concertResource) {

    const itemPerPage = 5;

    var self = this;
    self.next = next;
    self.previous = previous;
    self.hasNext = hasNext;
    self.hasPrevious = hasPrevious;
    self.viewFrom = viewFrom;
    self.viewTo = viewTo;
    self.pageNumber = pageNumber;

    activate();

    function activate() {

        var pageNumber = $stateParams.page;
        self.pageState = {
            offset: pageNumber && pageNumber > 0 ? (pageNumber - 1) * itemPerPage : 0,
            limit: itemPerPage
        };

        var now = new Date().getTime();

        Rx.Observable
            .of(Rx.Observable.fromPromise(concertResource.get().$promise))
            .merge(1)
            .flatMap(Rx.Observable.from)
            .map(enrich)
            .toArray()
            .toPromise()
            .then(resolve)
            .then(updateView)
            .then(apply);

        function enrich(concert) {
            if (concert.date) {
                concert.done = Date.parse(concert.date) < now;
            }
            return concert;
        }

        function resolve(concerts) {
            self.concerts = concerts;
            self.resultCount = concerts.length;
        }

        function apply() {
            $scope.$apply();
        }
    }

    function updateView() {
        self.showedConcerts = self.concerts.slice(self.pageState.offset, self.pageState.offset + self.pageState.limit);
    }

    function next() {
        self.pageState.offset += self.pageState.limit;
        $state.go('.', {page: self.pageNumber()}, {notify: false});
        updateView();
    }

    function previous() {
        self.pageState.offset -= self.pageState.limit;
        $state.go('.', {page: self.pageNumber()}, {notify: false});
        updateView();
    }

    function hasNext() {
        return self.pageState.offset + self.pageState.limit < self.resultCount;
    }

    function hasPrevious() {
        return self.pageState.offset > 0;
    }

    function viewFrom() {
        return self.pageState.offset + 1;
    }

    function viewTo() {
        return (self.pageState.offset + Math.min(self.pageState.limit, self.showedConcerts && self.showedConcerts.length || 0));
    }

    function pageNumber() {
        return self.pageState.offset > 0 ? (self.pageState.offset / itemPerPage) + 1 : 1;
    }
}
