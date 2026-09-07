// 1. Переписати на стрілки

// Перепиши три функції у стрілковий синтаксис. Для однорядкових — без return і фігурних дужок.

// function double(x) { return x * 2; }
// function sum(a, b) { return a + b; }
// function isAdult(age) { if (age >= 18) { return true; } return false; }
// Перевірка: double(4) → 8, isAdult(17) → false.

let double = (x) => x * 2;
let x = 4;
console.log(double(x));

let sum = (a, b) => a + b;
console.log(sum(4, 6));

let isAdult = (age) => (age >= 18 ? true : false);
console.log(isAdult(17));

// 2. Картка користувача

// Створи об'єкт user з полями firstName, lastName, age, city. Зроби три речі: виведи ім'я, виведи місто, додай нове поле email
// після створення об'єкта. Потім виведи весь об'єкт у консоль.

let user = {
  firstName: "Aisiel",
  lastName: "Akhatova",
  age: 29,
  city: "Kyiv",
};
console.log(user.firstName);
console.log(user.city);
user.email = "aisiel238@gmail.com";
console.log(user);

// 3. Товар і ціна зі знижкою

// Створи об'єкт product з полями title, price, discount (відсоток). Напиши стрілкову функцію getFinalPrice(product),
// яка приймає об'єкт і повертає ціну зі знижкою. Якщо поля discount в об'єкті немає — знижка 0.

// Перевірка:getFinalPrice({ title: "Ноутбук", price: 20000, discount: 10 }) → 18000.

let product = {
  title: "Ноутбук",
  price: 20000,
  discount: 10,
};
let getFinalPrice = (product) => {
  if (product.discount === undefined) {
    product.discount = 0;
  }
  return product.price - (product.price * product.discount) / 100;
};

console.log(getFinalPrice(product));

// 4. Порівняння двох об'єктів

// Створи два об'єкти book1 і book2 з полями title, author, pages. Напиши стрілкову функцію
//  getLonger(a, b), яка повертає об'єкт з більшою кількістю сторінок.

let book1 = {
  title: "Маленький принц",
  author: "Антуан де Сент-Екзюпері",
  pages: 150,
};
let book2 = {
  title: "Сто років самотності",
  author: "Габріель Гарсія Маркес",
  pages: 268,
};

let getLonger = (a, b) => {
  if (a.pages > b.pages) {
    return a;
  }
  return b;
};
console.log(getLonger(book1, book2));
