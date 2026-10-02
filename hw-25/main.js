// В index.html є лише порожній контейнер: <ul id="catalog" class="catalog"></ul>. Усю розмітку карток створюєш через JS. 
// Масив клади в data.js, руками його не змінюй.

// Що треба зробити
// Напиши функцію createProductCard(product). Вона приймає один об'єкт і повертає готовий <li>. 
// У картці мають бути зображення, назва, категорія, ціна, рейтинг, теги і статус наявності.
const list = document.querySelector("ul");

const createProductCard = (id, title, category, price, discount, inStock, rating, image, tags) => {
    const item = `
    <li class="product"id="${id}">
        <h4>Назва товару: ${title}</h4>
        <p>Категорія: ${category}</p>
        <p>Ціна: ${price}</p>
        <p>Знижка: ${discount}</p>
        <p>У наявності: ${inStock ? "так" : "ні"}</p>
        <p>Рейтинг: ${rating}</p>
        <img src="${image}" alt="">
        <p>Теги: ${tags}</p>
    </li>`
list.insertAdjacentHTML("beforeend", item);
console.log(item.innerHTML);
};
const products = [
{ id: 1, title: 'Механічна клавіатура Keychron K2', category: 'keyboards', price: 3899, discount: 15, inStock: true, rating: 4.8, image: 'https://picsum.photos/seed/k2/300/200', tags: ['bluetooth', 'hot-swap'] },
{ id: 2, title: 'Миша Logitech MX Master 3S', category: 'mice', price: 4299, discount: null, inStock: true, rating: 4.9, image: 'https://picsum.photos/seed/mx/300/200', tags: ['wireless'] },
{ id: 3, title: 'Монітор Dell U2723QE', category: 'monitors', price: 24999, discount: 10, inStock: false, rating: 4.7, image: 'https://picsum.photos/seed/dell/300/200', tags: ['4k', 'usb-c', 'ips'] },
{ id: 4, title: 'Навушники Sony WH-1000XM5', category: 'audio', price: 13499, discount: null, inStock: true, rating: 4.6, image: null, tags: [] },
{ id: 5, title: 'Вебкамера Logitech C920', category: 'video', price: 2799, discount: 5, inStock: false, rating: 4.3, image: 'https://picsum.photos/seed/c920/300/200', tags: ['full-hd'] },
{ id: 6, title: 'Килимок для миші XXL', category: 'mice', price: 599, discount: null, inStock: true, rating: 3.9, image: null, tags: ['xxl'] },
];
products.forEach((product) => {
createProductCard(product.id, product.title, product.category, product.price, product.discount, product.inStock, product.rating, product.image, product.tags
)
});