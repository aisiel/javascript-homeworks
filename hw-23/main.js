const phoneBook = new Map();
phoneBook.set("Оля", "050-111-22-33");
phoneBook.set("Іван", "067-444-55-66");
phoneBook.set("Марія", "093-777-88-99");

const findPhone = (name) => {
  if (phoneBook.has(name)) {
    return phoneBook.get(name);
  } else {
    return "Контакт не знайдено";
  }
};
console.log(findPhone("Оля"));
console.log(findPhone("Петро"));

const removeContact = (name) => {
  phoneBook.delete(name);
  return "Контакт видалено";
};
console.log(removeContact("Оля"));
console.log(findPhone("Оля"));

const printAll = () => {
  for (const [key, value] of phoneBook) {
    console.log(key, value);
  }
};
printAll();

// Створи Map, де ключ — ім'я, значення — номер телефону:

// Напиши три функції:

// findPhone(name) — повертає номер за ім'ям або "Контакт не знайдено".
// removeContact(name) — видаляє контакт і виводить "Контакт видалено",
// або "Такого контакту нема".
// printAll() — виводить кожен контакт у форматі Ім'я: номер.
// findPhone("Іван");      // → "067-444-55-66"
// findPhone("Петро");     // → "Контакт не знайдено"

// removeContact("Оля");   // Контакт видалено
// removeContact("Оля");   // Такого контакту нема

// printAll();
// // Іван: 067-444-55-66
// // Марія: 093-777-88-99

// Чи є число в списку (Set + умова)

const allowedCodes = new Set();
allowedCodes.add(101);
allowedCodes.add(205);
allowedCodes.add(333);

const checkCode = (code) => {
  if (allowedCodes.has(code)) {
    return "Доступ дозволено";
  } else {
    return "Доступ заборонено";
  }
};
console.log(checkCode(205));
console.log(checkCode(999));

// Напиши функцію checkCode(code), яка виводить "Доступ дозволено", якщо код є в списку,
//  і "Доступ заборонено", якщо нема.

// checkCode(205); // Доступ дозволено
// checkCode(999); // Доступ заборонено
