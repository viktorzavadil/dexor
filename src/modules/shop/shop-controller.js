'use strict';

export default ['$scope', 'localStorageService', 'shopResource', ShopController];

function ShopController($scope, localStorageService, shopResource) {

    var Rx = require('rx');

    var self = this;

    self.cart = [];
    self.toCart = toCart;
    self.deleteFromCart = deleteFromCart;
    self.deleteAll = deleteAll;
    self.cartItems = cartItems;
    self.order = order;

    activate();

    function activate() {
        localStorageService.set('shop.cart', self.cart);

        Rx.Observable
            .of(Rx.Observable.fromPromise(shopResource.shopArticles.get().$promise))
            .merge(1)
            .subscribe(function (data) {
                self.shopArticles = data;
                $scope.$apply();
            });
    }

    function deleteFromCart(item) {
        self.cart = self.cart.filter(function (cartItem) {
            return cartItem.id !== item.id;
        });
    }

    function deleteAll() {
        self.cart = [];
    }

    function toCart(item) {
        var cartItem = self.cart.find(function (cartItem) {
            if (item.sizes) {
                return cartItem.id === item.id && cartItem.size === item.selectedSize;
            } else {
                return cartItem.id === item.id;
            }
        });

        if (!cartItem) {
            self.cart.push(new CartItem(item));
        } else {
            cartItem.quantity = item.quantity || 1;
        }
    }

    function cartItems(item) {
        return self.cart.filter(function (cartItem) {
            return cartItem.id === item.id;
        });
    }

    function order() {

    }

    function CartItem(articleItem) {
        this.id = articleItem.id;
        this.quantity = articleItem.quantity || 1;
        if (articleItem.sizes) {
            this.size = articleItem.selectedSize || articleItem.sizes[0];
        }
        this.price = articleItem.price;
    }
}
