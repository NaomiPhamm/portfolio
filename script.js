// get button element
const hireBtn = document.getElementById("hireBtn");


if (hireBtn) {

    hireBtn.addEventListener("click", function () {

    
        const contactSection = document.getElementById("contact");

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}
// spotlight effect
document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('mousemove', function(e) {

        const rect = card.getBoundingClientRect();

        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);

    });

});






// form handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if(contactForm){

    contactForm.addEventListener('submit', function(e){

        e.preventDefault();

        if(successMessage){
            successMessage.style.display = 'block';
        }

        this.reset();

        setTimeout(function(){

            if(successMessage){
                successMessage.style.display = 'none';
            }

        }, 3000);

    });

}



// EmailJS
document.addEventListener("DOMContentLoaded", function () {

    if(typeof emailjs !== "undefined"){

        emailjs.init("9c9UABgvXx_XjFIfd");

        const form = document.getElementById("contactForm");

        if(form){

            form.addEventListener("submit", function (event) {

                event.preventDefault();

                emailjs.sendForm(
                    "service_5buonrg",
                    "template_5gqsi34",
                    this
                );

            });

        }

    }

});
const words = [
  "Developer",
  "Web Developer",
  "Software Developer",
  "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect() {

  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } 
  else {
    setTimeout(deleteEffect, 1500);
  }

}

function deleteEffect() {

  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 40);
  } 
  else {
    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

    setTimeout(typeEffect, 200);
  }

}

typeEffect();