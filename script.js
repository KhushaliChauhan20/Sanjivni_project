//   LOAD HEADER

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        const header = document.getElementById("header");

        if (header) {
            header.innerHTML = data;
        }
    })
    .catch(error => console.error("Error loading header:", error));


//   LOAD FOOTER

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.innerHTML = data;
        }
    })
    .catch(error => console.error("Error loading footer:", error));


//   NUMBER COUNTER

function startCount(target, elementId, speed) {
    const element = document.getElementById(elementId);

    // Skip if the counter does not exist on this page
    if (!element) return;

    let count = 0;

    ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        once: true,

        onEnter: function () {
            const counter = setInterval(function () {
                count += Math.ceil(target / 100);

                if (count >= target) {
                    count = target;
                    clearInterval(counter);
                }

                element.innerText =
                    (target === 100 || target === 49)
                        ? count + "%"
                        : (target === 20)
                            ? count + "m"
                            : count + "+";

            }, speed);
        }
    });
}
window.addEventListener("load", function () {
    startCount(25, "Manufacture", 85);
    startCount(100, "Customer", 20);
    startCount(50, "Alloy", 40);
    startCount(50, "Special", 40);
    startCount(49, "Crane", 40);
    startCount(20, "Metal", 80)

    ScrollTrigger.refresh();
});

// Scroll Animation
const carousel = document.getElementById("homeCarousel");

if (carousel) {
let lastIndex = 0;
let direction = 1;

// First slide animation on page load
const firstSlide = carousel.querySelector(".carousel-item.active");

gsap.set(firstSlide.querySelector(".home-font"), {
    x: 0,
    y: 0,
    opacity: 1
});

gsap.set(
    firstSlide.querySelectorAll(".home-font1, .home-btn"),
    {
        x: 0,
        y: 0,
        opacity: 1
    }
);


// Before changing slide
carousel.addEventListener("slide.bs.carousel", function (event) {

    const nextIndex = event.to;

    // Detect direction
    direction = nextIndex > lastIndex ? 1 : -1;

    // Handle looping from last slide to first
    if (lastIndex === 2 && nextIndex === 0) direction = 1;

    // Handle looping from first slide to last
    if (lastIndex === 0 && nextIndex === 2) direction = -1;

    lastIndex = nextIndex;

    const currentSlide = carousel.querySelector(".carousel-item.active");

    const oldElements = currentSlide.querySelectorAll(
        ".home-font, .home-font1, .home-btn"
    );

    // Old content moves upward and fades out
    gsap.to(oldElements, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
    });

});


// After changing slide
carousel.addEventListener("slid.bs.carousel", function () {

    const activeSlide = carousel.querySelector(".carousel-item.active");

    const heading = activeSlide.querySelector(".home-font");
    const text = activeSlide.querySelector(".home-font1");
    const button = activeSlide.querySelector(".home-btn");

    // Heading enters from the appropriate side
    gsap.set(heading, {
        x: direction > 0 ? 100 : -100,
        y: 0,
        opacity: 0
    });

    // Description and button enter from bottom
    gsap.set([text, button], {
        x: 0,
        y: 50,
        opacity: 0
    });

    const tl = gsap.timeline();

    tl.to(heading, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
    });

    tl.to(text, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
    }, "-=0.4");

    tl.to(button, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
    }, "-=0.4");
   
});
}
// product we serve animation


// Heading fade animation
gsap.to(".product-heading", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".product-heading",
        start: "top 85%",
        once: true
    }
});


// Product circles animation
gsap.to(".product-block", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".product-block",
        start: "top 85%",
        once: true
    }
});

// who we are animation
gsap.registerPlugin(ScrollTrigger);

// Main heading fade
gsap.to(".product-heading", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".product-heading",
        start: "top 85%",
        once: true
    }
});

// Subheading fade
gsap.to(".product-subheading", {
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".product-subheading",
        start: "top 85%",
        once: true
    }
});

// Image comes from left
gsap.fromTo(".who-img",
    {
        x: -80,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".who-img",
            start: "top 80%",
            once: true
        }
    }
);

// Text comes from right
gsap.fromTo(".who-content",
    {
        x: 80,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".who-content",
            start: "top 80%",
            once: true
        }
    }
);

// Our company animation


// Main heading fade
gsap.to(".product-heading", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".product-heading",
        start: "top 85%",
        once: true
    }
});

// Subheading fade
gsap.to(".product-subheading", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".product-subheading",
        start: "top 85%",
        once: true
    }
});

// Left-side image fade
gsap.to(".compRespImg", {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".compRow",
        start: "top 80%",
        once: true
    }
});

// Right-side content fade
gsap.to([".compFont", ".compFont1", ".com_btn"], {
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".compRow",
        start: "top 80%",
        once: true
    }
});

// Certificate animation

// Certificates heading
gsap.to(".certificate-section .product-heading", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".certificate-section",
        start: "top 80%",
        once: true
    }
});

// Subheading
gsap.to(".certificate-section .product-subheading", {
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".certificate-section",
        start: "top 80%",
        once: true
    }
});

// Paragraph fade
gsap.to(".certificate-content", {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".certificate-content",
        start: "top 85%",
        once: true
    }
});

// Certificate images fade one by one
gsap.to(".certificate-images img", {
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".certificate-images",
        start: "top 85%",
        once: true
    }
});

// Power animation


// Heading fade animation
gsap.to(".powerText", {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",

    scrollTrigger: {
        trigger: ".powering",
        start: "top 80%",
        once: true
    }
});


// Left Mission block
gsap.fromTo(".powerRow > div:first-child .powecol",
    {
        x: -80,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".powerRow",
            start: "top 80%",
            once: true
        }
    }
);


// Right Vision block
gsap.fromTo(".powerRow > div:last-child .powecol",
    {
        x: 80,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".powerRow",
            start: "top 80%",
            once: true
        }
    }
);

// About block animation


gsap.fromTo(".about-heading",
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".aboutcol",
            start: "top 80%",
            once: true
        }
    }
);

gsap.fromTo(".about-content",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".aboutcol",
            start: "top 80%",
            once: true
        }
    }
);