'use strict';

import {copy} from 'angular';

export default ['$scope', '$mdDialog', 'cart', 'localStorageService', OrderDialogController];

function OrderDialogController($scope, $mdDialog, cart, localStorageService) {
    $scope.cancel = cancel;
    $scope.order = order;
    $scope.cart = cart;
    $scope.user = localStorageService.get('shop.user') || {};
    $scope.ready = ready;
    $scope.totalPrice = totalPrice;

    function cancel() {
        $mdDialog.cancel();
    }

    function order() {
        $mdDialog.hide(new Order($scope.user, $scope.cart));
    }

    function totalPrice() {
        let total = 0;
        cart.forEach(function(item) {
            total += item.price * item.quantity;
        });
        return total;
    }

    function ready() {
        return !!$scope.user.name && !!$scope.user.surname && !!$scope.user.email && !!$scope.user.street && !!$scope.user.city && !!$scope.user.postalCode;
    }

    function saveUser() {
        const user = copy($scope.user);
        delete user.note;
        localStorageService.set('shop.user', user);
    }

    function Order(user, cart) {
        this.user = user;
        this.cart = cart;
    }

    $scope.$watch('user', saveUser, true);
}