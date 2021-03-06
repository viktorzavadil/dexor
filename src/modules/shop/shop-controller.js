'use strict';

export default ['$scope', '$mdDialog', '$window', 'localStorageService', 'shopResource', 'orderResource', '$mdToast', ShopController];

function ShopController($scope, $mdDialog, $window, localStorageService, shopResource, orderResource, $mdToast) {

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
            return orderResource.save(order).$promise;
        }).then(() => {
            $window.scrollTo(0, 0);
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent('Objednávka odeslána! Děkujeme za podporu.')
                    .position('top right')
                    .hideDelay(10000)
            );
        }, (err) => {
            $window.scrollTo(0, 0);
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent('Objednávku se nepodařilo odeslat, prosím, kontaktujte nás.')
                    .position('top right')
                    .hideDelay(10000)
            );
            console.log(err);
        });
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
