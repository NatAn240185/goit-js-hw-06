const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
  
    // Методи об'єкта
    getBalance() {
      return this.balance; // Додано this
    },
  
    getDiscount() {
      return this.discount; // Додано this
    },
  
    setDiscount(value) {
      this.discount = value; // Додано this
    },
  
    getOrders() {
      return this.orders; // Додано this
    },
  
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount; // Додано this
      this.orders.push(order); // Додано this
    },
  };
  
  // Виклики методів для перевірки
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // Виведе: 0.15
  customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // Виведе: 19750
  console.log(customer.getOrders()); // Виведе: ["Burger", "Pizza", "Salad", "Steak"]