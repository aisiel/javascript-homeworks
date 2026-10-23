
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(`Знайдено 100 об'єктів: ${json}`))
//   .catch(() => {
//     const body = document.body;
//     const banner = `
//     <div class="error-message">ERROR!</div>`;
//     body.insertAdjacentHTML("afterend", banner)
//   });

const getList = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    console.log(posts);
  } catch (error) {
    const body = document.body;
    const banner = `
    <div class="error-message">ERROR!</div>`;
    body.insertAdjacentHTML("afterend", banner);
  }
};
getList();
