//Auto slider
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    autoplay: {
        delay: 10000, // La durata di visualizzazione di ogni slide in millisecondi (es. 5000ms = 5 secondi)
        disableOnInteraction: false, // Impedisce l'interruzione dell'autoplay quando l'utente interagisce con lo slider
    },
});

var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 10000, // La durata di visualizzazione di ogni slide in millisecondi (es. 5000ms = 5 secondi)
        disableOnInteraction: false, // Impedisce l'interruzione dell'autoplay quando l'utente interagisce con lo slider
    },
});

//Navigation bar effect on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


//Animazione chisiamo section solo quando siamo in quella sezione
let animationSeen = false;
function handleAnimation() {
    if (animationSeen == false) {
        const textElement = document.querySelector('.serviziH1');
        textElement.classList.add('animateServizi');
        animationSeen = true;
    }
}

window.addEventListener('scroll', handleAnimation);

