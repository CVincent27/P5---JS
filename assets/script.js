const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bannerImage = document.getElementById("banner-img");
let arrowLeft = document.getElementById("leftArrow");
let arrowRight = document.getElementById("rightArrow");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

// Flèche gauche
arrowLeft.addEventListener("click", function () {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	updateCarousel();

});

// Flèche droite
arrowRight.addEventListener("click", function () {
	currentSlide = (currentSlide + 1) % slides.length;
	updateCarousel();
});

// Mettre à jour le carroussel
function updateCarousel() {
	// change la src de l'img
	bannerImage.src = slides[currentSlide].image;
	// change tagline
	

	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}
