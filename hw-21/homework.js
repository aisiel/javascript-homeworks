// Матеріал від викладача
// 1. Площа прямокутника

// Напиши функцію getRectangleArea(width, height), яка повертає площу. Виклич її тричі з різними аргументами і виведи результати
// в консоль.

// Перевірка: getRectangleArea(3, 4) → 12.

// 2. Знижка

// Напиши функцію applyDiscount(price, discount), де discount — відсоток.
// Функція повертає ціну зі знижкою. Якщо discount
// не передали — знижка 0.

// Перевірка: applyDiscount(1000, 15) → 850, applyDiscount(1000) → 1000.

// 3. Привітання з форматуванням

// Напиши функцію greet(name), всередині якої оголошена внутрішня функція capitalize(str) —
// вона робить першу літеру великою,
//  решту малою. greet повертає рядок Привіт, <Ім'я>! з уже відформатованим іменем.
// Спробуй викликати capitalize зовні greet і поясни,
//  чому не виходить.

// Перевірка:greet("оЛЕГ") → "Привіт, Олег!".

function getRectangleArea(width, height) {
  return width * height;
}
console.log(getRectangleArea(3, 4));
console.log(getRectangleArea(10, 15));
console.log(getRectangleArea(47, 63));

function applyDiscount(price, discount) {
  if (discount === undefined) {
    discount = 0;
  }
  return price - price * (discount / 100);
}
console.log(applyDiscount(1000, 15));
console.log(applyDiscount(500));
console.log(applyDiscount(555, 80));


function greet(name) {
  function capitalize(str){
   return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  return `Привіт, ${capitalize(name)}!`;
}
console.log(greet("оЛЕГ"));
console.log(greet("айСєль"));
console.log(capitalize("oLeh")); // помилка, бо ця функція не в області видимості
