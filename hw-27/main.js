const pics = [
  "https://i.guim.co.uk/img/media/c71420a79dab5d28cfb7e0528ba25bb6c2803300/0_226_5100_3059/master/5100.jpg?width=1900&dpr=2&s=none&crop=none",
  "https://blog.3bee.com/_next/image/?url=https%3A%2F%2Fapi-backend-assets.s3.eu-south-1.amazonaws.com%2Fprivate%2Ffiler_public%2F7a%2F1e%2F7a1e4c97-f109-402b-9e39-60a99c01ec35%2F7e06414e-427e-4cc8-965f-06f39ee6a8df.jpg&w=3840&q=75",
  "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/z/u/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=2600&hei=1430&scl=1.156923076923077",
  "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/149/928/original/pexels-souvenirpixels-417074.jpg?1731262288://pixabay.com/ru/images/download/gruendercoach-bird-7101606_1920.jpg",
  "https://www.societegenerale.com/sites/default/files/styles/rte_affichage_defaut_desktop/public/image/2025-05/20250523-nature-1200x630.jpg?itok=hvFUZhFc",
];
const image = document.querySelector("#slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dots = document.querySelector("#dots");
let currentIndex = 0;

image.setAttribute("src", pics[currentIndex]);

const handlePrevBtnClick = () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    image.setAttribute("src", pics[currentIndex]);

    dots.innerHTML = "";
    createDots();
  }
};
prevBtn.addEventListener("click", handlePrevBtnClick);
const handleNextBtnClick = () => {
  if (currentIndex < pics.length - 1) {
    currentIndex += 1;
    image.setAttribute("src", pics[currentIndex]);

    dots.innerHTML = "";
    createDots();
  }
};
nextBtn.addEventListener("click", handleNextBtnClick);

dots.addEventListener("click", (event) => {
   currentIndex = event.target.id;
    image.setAttribute("src", pics[currentIndex]);
    dots.innerHTML = "";
    createDots();
});
const createDots = () => {
  for (let i = 0; i < pics.length; i++) {
    const dot = document.createElement("li");
    dot.id = i;
  

    // dot.addEventListener("click", ()=>{
    //   currentIndex = i;
    //   image.setAttribute("src", pics[currentIndex]);
    // //   dot.classList.toggle("active");
    // })

    if (i === currentIndex) {
      dot.classList.add("active");
    }
    dot.innerHTML = `<span class="dot"></span>`;
    dots.insertAdjacentElement("beforeend", dot);
  }
};
createDots();
