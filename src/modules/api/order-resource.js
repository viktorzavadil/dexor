'use strict';

class OrderResource {

    constructor($resource) {
        this.order = $resource('order.php', {order: "@order"});
    }

    save(order) {
        return this.order.save(order);
    }
}

OrderResource.$inject = ['$resource'];

export default OrderResource;
