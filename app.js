
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = 3; 

  
    const maxIndex = totalSlides - visibleSlides;

  
    if (slideIndex > maxIndex) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = maxIndex;
    }

    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].clientWidth;

    
    slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}


showSlides();


function checkAge() {
    const ageGuess = document.getElementById('ageGuess').value;
    const actualAge = 2; 
    const result = document.getElementById('result');

    if (ageGuess == actualAge) {
        result.textContent = "you are a good friend!";
        result.style.color = "white";
        result.style.fontSize="4rem";
    } else {
        result.textContent = "fake friend?";
        result.style.color = "maroon";
        result.style.fontSize="4rem";
    }
}

function submitWish() {
    const wishText = document.getElementById('wishText').value;
    const wishesList = document.getElementById('wishesList');

    if (wishText.trim() === "") {
        alert("Please write a wish before submitting!");
        return;
    }

    const newWish = document.createElement('p');
    newWish.textContent = wishText;
    wishesList.appendChild(newWish);

    document.getElementById('wishText').value = ""; 
}


document.getElementById('menu-btn').onclick = function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); 
};
