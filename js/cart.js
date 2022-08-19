'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice () {
    return this.totalPrice;
  },
  add (nameProduct, priceProduct, amountProduct = 1) {
    const product = {
      name: nameProduct,
      price: priceProduct,
      amount: amountProduct,
    }

    this.items.push(product);
    this.increaseCount(product.amount);
    this.calculateItemPrice();
  },
  increaseCount (num) {
    return this.count += num;
  },
  calculateItemPrice () {
    this.totalPrice = 0;
    this.items.forEach((item) => {
      this.totalPrice += item.amount * item.price;
    });
    return this.totalPrice;
  },
  clear () {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print () {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость:', this.getTotalPrice());
  },
}

cart.add('стул', 400, 1);
cart.add('стол', 500);
cart.add('лампа', 200, 6);

cart.print();
