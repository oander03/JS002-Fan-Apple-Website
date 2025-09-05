gsap.registerPlugin(ScrollTrigger);

gsap.to(".b", {
    yPercent: -400,
    ease: "none",
    scrollTrigger: {
        trigger: ".a",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
        // markers: true,
    },
});

gsap.to(".c", {
    yPercent: 300,
    ease: "none",
    scrollTrigger: {
        trigger: ".a",
       // start: "top bottom",
       // end: "bottom top",
        scrub: true,
       // markers: true,
    },
});

gsap.to(".f", {
    yPercent: -190,
    ease: "none",
    scrollTrigger: {
        trigger: ".a",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
    },
});

gsap.to(".g", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
        trigger: ".a",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
    },
});

gsap.to(".h", {
    yPercent: -900,
    ease: "none",
    scrollTrigger: {
        trigger: ".a",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
        markers: true,
    },
});
