const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const captions = [
    " Attending Church Events - My Life",
    " Crocheting - My Creative Hobby",
    " Learning Web Development through W3Schools",
    " Record of Law Certificate",
];

let slideIndex = 0;

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }

    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    else{
        slideIndex = index;
    }

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");

    document.getElementById("caption").textContent = captions[slideIndex];
}

function currentSlide(index){
    showSlide(index);
}

showSlide(0);

// Automatic slideshow
setInterval(function(){

    slideIndex++;

    showSlide(slideIndex);

},3000);