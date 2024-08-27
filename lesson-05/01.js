/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
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

game.addResource('food', 5);     // Попробуем добавить недействительный ресурс
// В консоли: Invalid resource
