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