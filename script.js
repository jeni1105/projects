var sidenav=document.querySelector(".side-navbar")

function shownavbar()
{
    sidenav.style.left="0"
    
}
function closenavbar()
{
    sidenav.style.left="-70%"

}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === currentSlide) ? '1' : '0';
    });
}

// Change slide based on the direction (prev or next)
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide();
}

// Automatically change slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);

// Initially display the first slide
showSlide();
