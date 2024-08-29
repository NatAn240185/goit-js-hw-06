class StringBuilder {
    // Конструктор класу
    constructor(initialValue) {
      // Ініціалізація приватної властивості value
      this._value = initialValue;
    }
  
    // Метод для отримання значення
    getValue() {
      return this._value;
    }
  
    // Метод для додавання рядка в кінець
    padEnd(str) {
      this._value += str;
    }
  
    // Метод для додавання рядка на початок
    padStart(str) {
      this._value = str + this._value;
    }
  
    // Метод для додавання рядка на початок і в кінець
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  // Приклади використання класу
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // Виведе: "."
  
  builder.padStart("^");
  console.log(builder.getValue()); // Виведе: "^."
  
  builder.padEnd("^");
  console.log(builder.getValue()); // Виведе: "^.^"
  
  builder.padBoth("=");
  console.log(builder.getValue()); // Виведе: "=^.^="