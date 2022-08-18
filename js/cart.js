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

    this.items = [product];

    console.log(this.items);

    this.items.forEach((item) => {
      // console.log(item);
      this.count = this.increaseCount(item.amount);
      console.log(this.count);
      this.calculateItemPrice(item.amount, item.price);
    });
  },
  increaseCount (num) {
    return this.count += num;
  },
  calculateItemPrice (item, price) {
    return this.totalPrice += item * price;
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

cart.add('стул', 100, 1);
cart.add('стол', 500);
cart.add('лампа', 200, 6);

cart.print();
