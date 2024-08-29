class Storage {
    // Конструктор класу
    constructor(initialItems) {
      // Ініціалізація приватної властивості items
      this._items = initialItems;
    }
  
    // Метод для отримання поточних товарів
    getItems() {
      return this._items;
    }
  
    // Метод для додавання нового товару
    addItem(newItem) {
      this._items.push(newItem);
    }
  
    // Метод для видалення товару
    removeItem(itemToRemove) {
      // Фільтрація масиву, щоб видалити вказаний товар
      this._items = this._items.filter(item => item !== itemToRemove);
    }
  }
  
  // Приклади використання класу
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // Виведе: ["Nanitoids", "Prolonger", "Antigravitator"]
  
  storage.addItem("Droid");
  console.log(storage.getItems()); // Виведе: ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // Виведе: ["Nanitoids", "Antigravitator", "Droid"]
  
  storage.removeItem("Scaner");
  console.log(storage.getItems()); // Виведе: ["Nanitoids", "Antigravitator", "Droid"]