/* ================= LOADER ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 500);

    }, 1800);

});


/* ================= TYPING EFFECT ================= */

const typing = document.getElementById("typing");

const words = [
    "AI & ML Student",
    "Electronics Engineer",
    "Web Developer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu */

document.querySelectorAll(".nav-links a")
.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


/* ================= CONTACT FORM ================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me!"
    );

}


/* ================= PARTICLES ================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}

resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* Particle Class */

class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() * 2 + 1;

        this.speedX =
            (Math.random() - 0.5) * 0.7;

        this.speedY =
            (Math.random() - 0.5) * 0.7;
    }


    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {
            this.speedX *= -1;
        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {
            this.speedY *= -1;
        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0,234,255,0.7)";

        ctx.fill();

    }

}


/* Create particles */

for (
    let i = 0;
    i < 100;
    i++
) {

    particles.push(
        new Particle()
    );

}


/* Connect particles */

function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 120) {

                ctx.beginPath();

                ctx.strokeStyle =
                    "rgba(0,234,255,0.08)";

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}


/* Particle Animation */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(function(particle) {

        particle.update();

        particle.draw();

    });


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();