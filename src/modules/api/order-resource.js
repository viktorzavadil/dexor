'use strict';

class OrderResource {

    constructor($resource) {
        this.order = $resource('order.php', {email: "@email", order: "@order"});
    }

    post(email, order) {
        return this.order.save({email, order});
    }
}

OrderResource.$inject = ['$resource'];

export default OrderResource;
