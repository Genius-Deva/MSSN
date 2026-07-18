// ==========================
// Animated Counter
// ==========================

const counters = document.querySelectorAll(".counter");

const animateCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(updateCounter,20);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

window.addEventListener("load", animateCounter);
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML = '<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});