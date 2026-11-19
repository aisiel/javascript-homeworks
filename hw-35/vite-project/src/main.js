// import heroImg from "./assets/hero.png";
// import javascriptLogo from "./assets/javascript.svg";
// import viteLogo from "./assets/vite.svg";
// import { setupCounter } from "./counter.js";

const productsGrid = document.querySelector("#products");

productsGrid.addEventListener("click", (event) => {
  // console.log(event.target.dataset.id)
  if (event.target.closest("[data-id]")) {
    const product = state.products.find(
      (p) => p.id === Number(event.target.dataset.id),
    );
    const productFromStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
    localStorage.setItem("cart", JSON.stringify([...productFromStorage, product]));
    // addToCard(product);
    console.log("added to card");
  }
});
const state = {
  products: [],
  cart: [],
};
const createSkeleton = () => {
  const markup = Array.from(
    { length: 8 },
    () => "<div class='card card--skeleton'></div>",
  ).join("");
  productsGrid.innerHTML = markup;
};

const load = async () => {
  createSkeleton();
  try {
    const data = await fetch(
      "https://6ad9d2557512f497b3ff2e0f.mockapi.io/products",
    );
    const products = await data.json();
    state.products = products;
    console.log(state.products);
    const markup = products
      .map((product) => {
        return `<article class="card">
  <div class="card__image">${product.image}</div>
  <div class="card__body">
    <span class="card__category">${product.category}</span>
    <h3 class="card__title">${product.title}</h3>
    <p class="card__desc">${product.description}</p>
    <div class="card__footer">
      <div>
        <div class="card__price">${product.price}</div>
        <div class="card__rating">${product.rating.toFixed(1)}</div>
      </div>
      <button class="btn btn--primary" data-id="${product.id}">У кошик</button>
    </div>
  </div>
</article>`;
      })
      .join("");
    productsGrid.innerHTML = markup;
    // render();
    console.log(products);
  } catch (e) {
    console.error("Error!");
  }
};
load();

