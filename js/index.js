var tl;

tl = gsap.timeline({defauts: {ease: "power1.out"}});

tl.to(".content .desc", {opacity: 1, x: "0%", duration: .5, stagger: .25 });
tl.to(".content .desc .btn", {opacity: 1, y: "0%", duration: .5, stagger: .25 });
tl.to(".content .main-images", {opacity: 1, x: "0%", duration: .5, stagger: .25 });
tl.to(".logo a", {opacity: 1, y: "0%", duration: .5, stagger: .25 });
tl.to(".navb .navb-link", {opacity: 1, y: "0%", duration: .5, stagger: .25 });