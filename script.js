let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function currentSlide(index) {
    // 1. Remove active state from current slide and dot selection styling
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // 2. Set index focus to what user selected
    currentSlideIndex = index;
    
    // 3. Add active state to target slide elements
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Optional: Auto-cycle through galleries every 5 seconds dynamically
setInterval(() => {
    let nextSlide = (currentSlideIndex + 1) % slides.length;
    currentSlide(nextSlide);
}, 5000);








// Grab all the category cards
const cards = document.querySelectorAll('.category-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // 1. Remove 'active' class from any card that currently has it
    cards.forEach(c => c.classList.remove('active'));
    
    // 2. Add 'active' class to the clicked card
    card.classList.add('active');
  });
});








document.addEventListener("DOMContentLoaded", function () {
    const catBtn = document.querySelector(".cat-btn");
    const catContent = document.getElementById("catContent");

    // Toggle showing categories on load/click
    // In your screen, it is already open. Set to block by default if you want it permanently open on the home page.
    catContent.style.display = "block"; 

    catBtn.addEventListener("click", function () {
        if (catContent.style.display === "block") {
            catContent.style.display = "none";
        } else {
            catContent.style.display = "block";
        }
    });
});