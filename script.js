class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  print() {
    const { name, job } = this;
    console.log(`${name}, ${job}`);
  }
}

const thatGuy = new Person('John Doe', 'Software Engineer');
thatGuy.print();


const button = document.getElementById('contact');
button.addEventListener('click', () => {
  window.location.href = 'https://seemless.link/@BlueLips77';

  
});


const button2 = document.getElementById('profile');  
button2.addEventListener('click', () =>
window.location.href = 'https://www.linkedin.com/in/daijohnbryant/')

     const button3 = document.getElementById("abt").addEventListener("click", function() {
         document.getElementById("aboutMeSection").scrollIntoView({
             behavior: "smooth",  // Smooth scrolling effect
             block: "start"       // Aligns the section to the top of the viewport
         });
     });

const button4 = document.getElementById("portfolio")
button4.addEventListener('click', function(){

window.location.href = 'portfolio.html';  
  
})

homeButton = document.getElementById("Home")
homeButton.addEventListener("click", function(){

  window.location.href = 'index.html';
})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





 