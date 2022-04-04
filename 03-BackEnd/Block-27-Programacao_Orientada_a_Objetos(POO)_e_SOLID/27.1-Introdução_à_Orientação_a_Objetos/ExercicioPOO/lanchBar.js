// A pessoa cliente deverá conter o nome;
var Client = /** @class */ (function () {
    function Client(name) {
        this.name = name;
    }
    Object.defineProperty(Client.prototype, "nameClient", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
;
var OrderItem = /** @class */ (function () {
    function OrderItem(name, price) {
        this._name = String();
        this._price = Number();
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(OrderItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderItem.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('O preço deve ser positivo.');
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return OrderItem;
}());
var Order = /** @class */ (function () {
    function Order(client, items, paymentMethod, discount) {
        this._items = [];
        this._discount = 0;
        this._client = client;
        this.items = items;
        this._paymentMethod = paymentMethod;
        this.discount = discount;
    }
    Object.defineProperty(Order.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            if (value.length === 0) {
                throw new Error('O pedido deve ter pelo meno um item.');
            }
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "paymentMethod", {
        get: function () {
            return this._paymentMethod;
        },
        set: function (value) {
            this._paymentMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('O disconto não pode ser um valor negatívo.');
            }
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.calculateTotal = function () {
        return this.items.
            reduce(function (previousValue, item) {
            var total = previousValue += item.price;
            return total;
        }, 0);
    };
    Order.prototype.calculateTotalWithDiscount = function () {
        return this.calculateTotal() * (1 - this.discount);
    };
    return Order;
}());
var client = new Client('João');
var sandwiche = new OrderItem('Sandwiche Natural', 5.00);
var juice = new OrderItem('Suco de Abacaxí', 5.00);
var dessert = new OrderItem('Gelatina de Uva', 2.50);
var order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
