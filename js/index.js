var tl;

tl = gsap.timeline({defauts: {ease: "power1.out"}});

tl.to(".content .desc", {opacity: 1, x: "0%", duration: .5, stagger: .25 });
tl.to(".humbger", {opacity: 1, x: "0%", duration: .5, stagger: .25 });
tl.to(".content .desc .btn", {opacity: 1, y: "0%", duration: .5, stagger: .25 });
tl.to(".content .main-images", {opacity: 1, x: "0%", duration: .5, stagger: .25 });
tl.to(".logo a", {opacity: 1, y: "0%", duration: .5, stagger: .25 });
tl.to(".navb .navb-link", {opacity: 1, y: "0%", duration: .5, stagger: .25 });
tl.to(".container-s ul li", {opacity: 1, y: "0%", duration: .5, stagger: .25 });

var navb = document.querySelector(".js-header");

const header = () => {
    window.addEventListener("scroll", function() {
        if (this.scrollY > 0) {
            navb.classList.add("active");
        } else {
            navb.classList.remove("active");
        }
    })
}

header();

var humbger = document.querySelector(".humbger")
var humbgerM = document.querySelector(".humbger__menu")
const humbgers = () => {
    humbger.onclick = function() {
        humbger.classList.toggle("active");
        humbgerM.classList.toggle("active");
    }
}

humbgers();