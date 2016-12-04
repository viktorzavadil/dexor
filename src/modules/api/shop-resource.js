'use strict';

export default ['$resource', ShopResource];

function ShopResource($resource) {

    var shopArticles = $resource('static/data/shop-articles.json', {}, {
        get: {
            isArray: true
        }
    });

    this.shopArticles = {
        get: shopArticles.get
    };
}