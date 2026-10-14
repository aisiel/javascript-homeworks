function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Очікував ${expected}, отримав ${actual}`);
      }
    },
  };
}

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.log(`❌ ${name}\n   ${error.message}`);
  }
}

const getAgeCategory = (age) => {
  if (age < 0 || typeof age !== "number" || Number.isNaN(age)) {
    return "некоректний вік";
  } else if (age >= 0 && age <= 12) {
    return "дитина";
  } else if (age <= 17) {
    return "підліток";
  } else if (age <= 64) {
    return "дорослий";
  } else {
    return "пенсіонер";
  }
};
console.log(getAgeCategory("jfr"));

test("дитина", () => {
  expect(getAgeCategory(12)).toBe("дитина");
});
test("підліток", () => {
  expect(getAgeCategory(13)).toBe("підліток");
});
test("підліток", () => {
  expect(getAgeCategory(17)).toBe("підліток");
});
test("дорослий", () => {
  expect(getAgeCategory(18)).toBe("дорослий");
});
test("дорослий", () => {
  expect(getAgeCategory(64)).toBe("дорослий");
});
test("пенсіонер", () => {
  expect(getAgeCategory(65)).toBe("пенсіонер");
});
test("некоректний вік", () => {
  expect(getAgeCategory(-7)).toBe("некоректний вік");
});

const calculateTotal = (price, quantity, discount = 0) => {
  if (price < 0 || quantity < 0 || discount > 100) {
    return null
  } else return price * quantity - (price * quantity * discount) / 100;
};
test(300, () => {
  expect(calculateTotal(100, 3)).toBe(300);
});
test(270, () => {
  expect(calculateTotal(100, 3, 10)).toBe(270);
});
test(300, () => {
  expect(calculateTotal(100, 3, 0)).toBe(300);
});
test(0, () => {
  expect(calculateTotal(100, 3, 100)).toBe(0);
});
test(0, () => {
  expect(calculateTotal(100, 0)).toBe(0);
});

// Функція 2. calculateTotal(price, quantity, discount = 0)
// Рахує суму покупки: ціна × кількість, мінус знижка у відсотках. Повертає число.

// calculateTotal(100, 3) → 300
// calculateTotal(100, 3, 10) → 270
// discount необов'язковий, за замовчуванням 0.
// Якщо price або quantity від'ємні, або discount більший за 100 — повертай null.
// Мінімум 6 тестів: без знижки, зі знижкою, знижка 0, знижка 100, кількість 0, некоректні дані.

// Вимоги
// Кожен тест перевіряє один кейс і має зрозумілу назву: що на вході і що очікуємо.
// Хоча б один тест спочатку напиши навмисно неправильним, переконайся, що бачиш ❌ з повідомленням, і лише потім виправ.
