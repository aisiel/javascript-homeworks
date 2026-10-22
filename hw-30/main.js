const products = {
  name: "tea",
  quantity: 12,
};
const jsonProducts = JSON.stringify(products);

// fetch("https://6ad9d2557512f497b3ff2e0f.mockapi.io/product-list");

// fetch("https://6ad9d2557512f497b3ff2e0f.mockapi.io/product-list", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: jsonProducts,
// });
 fetch("https://6ad9d2557512f497b3ff2e0f.mockapi.io/product-list/5", {
    method: "DELETE",
 }
 )