'use strict';

export default ['$scope', '$mdDialog', 'localStorageService', 'shopResource', 'orderResource', ShopController];

function ShopController($scope, $mdDialog, localStorageService, shopResource, orderResource) {

    var Rx = require('rx');

    var self = this;

    self.cart = localStorageService.get('shop.cart') || [];
    self.toCart = toCart;
    self.deleteFromCart = deleteFromCart;
    self.deleteAll = deleteAll;
    self.cartItems = cartItems;
    self.order = order;

    activate();

    function activate() {
        Rx.Observable
            .of(Rx.Observable.fromPromise(shopResource.shopArticles.get().$promise))
            .merge(1)
            .flatMap(Rx.Observable.from)
            .map(initSizeSelect)
            .toArray()
            .subscribe(function(data) {
                self.shopArticles = data;
                $scope.$apply();
            });

        function initSizeSelect(article) {
            if (article.sizes) {
                article.selectedSize = article.sizes[0];
            }
            return article;
        }
    }

    function deleteFromCart(item) {
        self.cart = self.cart.filter(function(cartItem) {
            return cartItem.id !== item.id;
        });
        reinitLocalStorage();
    }

    function deleteAll() {
        self.cart = [];
        reinitLocalStorage();
    }

    function toCart(item) {
        var cartItem = self.cart.find(function(cartItem) {
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
        reinitLocalStorage();
    }

    function cartItems(item) {
        return self.cart.filter(function(cartItem) {
            return cartItem.id === item.id;
        });
    }

    function order(event) {
        $mdDialog.show({
            targetEvent: event,
            template: require('./templates/order-dialog.html'),
            controller: 'orderDialogController',
            locals: {cart: self.cart},
            fullscreen: true
        }).then(function(order) {
            self.cart = [];
            reinitLocalStorage();
            return orderResource.post({email: order.user.email, order: JSON.stringify(order, null, 2)}).$promise;
        }).then(() => console.log("order ok"), (err) => console.log(err));
    }

    function reinitLocalStorage() {
        localStorageService.set('shop.cart', self.cart);
    }

    function CartItem(articleItem) {
        this.id = articleItem.id;
        this.quantity = articleItem.quantity || 1;
        if (articleItem.sizes) {
            this.size = articleItem.selectedSize || articleItem.sizes[0];
        }
        this.title = articleItem.title;
        this.price = articleItem.price;
    }
}
