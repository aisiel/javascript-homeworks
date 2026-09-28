// // 1. Є масив const queue = ['Аня', 'Богдан']. Додай 'Віра' у кінець, а 'Гліб' - на початок.
// //  Виведи масив і його довжину.

// const queue = ["Аня", "Богдан"];

// queue.push("Віра");
// queue.unshift("Гліб");
// console.log(queue);
// console.log(queue.length);

// // 2. Є масив [10, 20, 30, 40]. Видали перший і останній елементи, збережи їх у змінні first і last.
// //  Виведи суму first + last і масив, що залишився.
// const arr1 = [10, 20, 30, 40];
// const first = arr1.shift();
// console.log(first);
// const last = arr1.pop();
// console.log(last);
// console.log(first + last);
// console.log(arr1);

// // 3. Є масив задач. Додай нову задачу { id: 3, title: 'Купити хліб', done: false } в кінець і видали першу.
// // Виведи результат.

// const arr2 = [
//   { id: 1, title: "Попрати одяг", done: false },
//   { id: 2, title: "Приготувати вечерю", done: true },
// ];
// arr2.push("id: 3, title: 'Купити хліб', done: false");
// arr2.shift();
// console.log(arr2);

// // 4. Напиши функцію addUser(users, name), яка додає нового користувача в кінець масиву.
// // id має бути на 1 більшим за id останнього елемента (якщо масив порожній - 1).

// const users = [
//   { id: 1, userName: "Oksana" },
//   { id: 2, userName: "Mykhailo" },
//   { id: 3, userName: "Mykyta" },
// ];
// const addUser = (users, name) => {
//   let newUser = users[users.length - 1].id + 1;
//   if (users.length === 0) {
//     return users.push({ id: 1, userName: name });
//   } else users.push({ id: newUser, userName: name });
// };
// addUser(users, "Olena");
// console.log(users);

// // 5. Знайди перше число, більше за 10, у масиві [3, 8, 12, 5, 20]

// const arr3 = [3, 8, 12, 5, 20];
// const result = arr3.find((item) => {
//   if (item > 10) {
//     return true;
//   }
// });
// console.log(result);

// // 6. Знайди перший рядок довжиною більше 5 символів у ['кіт', 'собака', 'пес', 'ведмідь'].
// // Що повернеться, якщо таких немає?

// const animals = ["кіт", "собака", "пес", "ведмідь"];
// const verdict = animals.find((animal) => {
//   if (animal.length > 5) {
//     return true;
//   }
// });
// console.log(verdict);
// // якщо таких не буде, то повернеться undefined

// // 7. Знайди перше від'ємне число в масиві [4, 0, -2, 7, -9].
// // Якщо його немає - виведи 'Від'ємних немає'.

// const arr4 = [4, 0, -2, 7, -9];

// const callback = (element) => element < 0;

// const result = arr4.find(callback);

// if (result === undefined) {
//   console.log("Від'ємних немає");
// } else {
//   console.log(result);
// }

// 8. Знайди користувача з id === 2. Виведи його ім'я.

// const users = [
//   { id: 1, name: 'Аня', age: 25 },
//   { id: 2, name: 'Богдан', age: 17 },
//   { id: 3, name: 'Віра', age: 32 },
// ];
// 9. Напиши функцію getUserName(users, id), яка повертає ім'я користувача або 'Невідомий', якщо такого id немає.

// 10.  Знайди перший товар, якого немає в наявності, і виведи його назву.

// const products = [
//   { name: 'Ноутбук', price: 30000, inStock: true },
//   { name: 'Миша', price: 800, inStock: false },
//   { name: 'Клавіатура', price: 2500, inStock: false },
// ];

// 11. Залиш тільки слова, що починаються на 'к': ['кіт', 'собака', 'кінь', 'миша', 'корова'].

// 12. Напиши функцію removeAll(array, value), яка повертає новий масив без усіх входжень value.

// removeAll([1, 2, 1, 3, 1], 1) → [2, 3].

// 13. Отримай товари в наявності з ціною до 5000.

// const products = [
//   { name: 'Ноутбук', price: 30000, inStock: true },
//   { name: 'Миша', price: 800, inStock: false },
//   { name: 'Клавіатура', price: 2500, inStock: true },
//   { name: 'Килимок', price: 300, inStock: true },
// ];
// 14. Отримай масив квадратів: [1, 2, 3, 4] → [1, 4, 9, 16].

// 15. Перетвори масив рядків на масив їхніх довжин: ['кіт', 'собака', 'пес'] → [3, 6, 3].

// 16. Перетвори масив цін у гривнях на рядки з валютою: [100, 250] → ['100 грн', '250 грн'].

// 17. Отримай масив імен користувачів.

// const users = [
//   { id: 1, name: 'Аня', age: 25 },
//   { id: 2, name: 'Богдан', age: 17 },
// ];
