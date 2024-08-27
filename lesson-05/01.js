const game = {
  resources: {
    gold: 100,
    lumber: 50,
    stone: 30
  },

  addResource: function(resource, amount) {
    // Проверяем, существует ли ресурс
    if (!(resource in this.resources)) {
      console.log("Invalid resource");
      return; // Выход из метода, если ресурс недействителен
    }

    // Добавляем указанное количество ресурсов
    this.resources[resource] += amount;
  }
};

// Примеры использования метода
game.addResource('gold', 20);   // Добавит 20 к золоту
console.log(game.resources.gold); // 120

game.addResource('lumber', 15);  // Добавит 15 к лесу
console.log(game.resources.lumber); // 65

game.addResource('stone', 10);   // Добавит 10 к камню
console.log(game.resources.stone); // 40

game.addResource('food', 5);     // Попробуем добавить недействительный ресурс
// В консоли: Invalid resource