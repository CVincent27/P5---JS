const slides = [
  {
    image: "/assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "/assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "/assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "/assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let dots;
let bannerImage = document.getElementById("banner-img");
const arrowLeft = document.getElementById("leftArrow");
const arrowRight = document.getElementById("rightArrow");
const dotsContainer = document.querySelector(".dots");
const banner = document.getElementById("banner");
let contentTagline = document.getElementById("content-tagline");

let currentSlide = 0;
createDots();
updateCarousel();

// Flèche gauche
arrowLeft.addEventListener("click", function () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  // % à expliquer
  updateCarousel();
});

// Flèche droite
arrowRight.addEventListener("click", function () {
  currentSlide = (currentSlide + 1) % slides.length; 
  updateCarousel();
});

// Mettre à jour le carroussel
function updateCarousel() {
  if (!bannerImage) {
    const img = document.createElement("img");
    img.id = "banner-img";
    img.classList.add("banner-img");
    banner.prepend(img);
    bannerImage = document.getElementById("banner-img");
  }
  // change la src de l'img
  bannerImage.src = slides[currentSlide].image;
  bannerImage.alt = slides[currentSlide].tagLine;

  // add tagline
  if (!contentTagline) {
    const p = document.createElement("p");
    p.id = "content-tagline";
    banner.prepend(p);
    contentTagline = document.getElementById("content-tagline");
  }
  contentTagline.innerHTML = slides[currentSlide].tagLine;

  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
  }
  dots = document.querySelectorAll(".dot")
}
