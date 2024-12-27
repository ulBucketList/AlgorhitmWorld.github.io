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
  window.location.href = 'https://shor.by/ZwMr';

  
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







 