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


// ABOUT CARD SPOTLIGHT EFFECT
document.querySelectorAll('.about-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();

        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});


// ABOUT SCROLL REVEAL
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".about-title, .about-card").forEach((el) => {
    aboutObserver.observe(el);
});
// CONTACT FORM + EMAILJS IN ONE PLACE
document.addEventListener("DOMContentLoaded", function () {

    if (typeof emailjs !== "undefined") {
        emailjs.init("9c9UABgvXx_XjFIfd");
    }

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            if (typeof emailjs !== "undefined") {
                emailjs.sendForm(
                    "service_5buonrg",
                    "template_5gqsi34",
                    this
                ).then(function () {
                    if (successMessage) {
                        successMessage.style.display = "block";
                    }

                    contactForm.reset();

                    setTimeout(function () {
                        if (successMessage) {
                            successMessage.style.display = "none";
                        }
                    }, 3000);
                }).catch(function (error) {
                    console.log("Email send failed:", error);
                });
            }
        });
    }
});

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".about-title, .about-card, .projects-title").forEach((el) => {
    aboutObserver.observe(el);
});
// TYPING EFFECT
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
    if (!typingText) {
        return;
    }

    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(deleteEffect, 1500);
    }
}


function deleteEffect() {
    if (!typingText) {
        return;
    }

    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 40);
    } else {
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 200);
    }
}

typeEffect();
// CONTACT CARD SPOTLIGHT
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();

        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});

// CONTACT SCROLL REVEAL
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".contact-title, .contact-subtitle, .contact-card").forEach((el) => {
    contactObserver.observe(el);
});