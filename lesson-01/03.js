/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let factorial = 0;
let number = 20;
let i = 1;

for (let i = 0; i <=number; i++) {
    if (i % 2 !== 0) {
        factorial = factorial + i
    }
}

console.log(sum);

// hw-done