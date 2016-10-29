export default function ($rootScope) {

    var self = this;

    this.clearAll = function () {
        self.setTitle();
        self.setDescription();
        self.setUrl();
        self.setCurrentStateName();
    };
    
    this.setTitle = function (value) {
        $rootScope.title = value;
    };

    this.setDescription = function (value) {
        $rootScope.description = value;
    };

    this.setUrl = function (value) {
        $rootScope.url = value;
    };

    this.setCurrentStateName = function (value) {
        $rootScope.currentStateName = value;
    };
};