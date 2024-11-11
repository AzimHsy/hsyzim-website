gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 3,
    },
    y: 5,
    duration: 1,
    opacity: 0.2,
    stagger: 0.1,
  });
});

const myText = new SplitType(".last-header");

gsap.to(".last-header .char", {
  scrollTrigger: {
    trigger: ".last-header",
    start: "top 80%",
    end: "center 20%",
    scrub: 1,
  },
  opacity: 1,
  y: 0,
  stagger: 0.1,
  duration: 1,
});

gsap.to(".header-container", {
  scrollTrigger: {
    trigger: ".aboutUs-container",
    start: "35% 80%",
    endTrigger: ".aboutUs-container",
    end: "70% 70%",
    scrub: true,
  },
  y: -320,
  opacity: 0,
});

gsap.to(".hb-header", {
  scrollTrigger: {
    trigger: ".aboutUs-container",
    start: "25% 80%",
    endTrigger: ".aboutUs-container",
    end: "70% 70%",
    scrub: 0.8,
  },
  y: 60,
});

gsap.to(".wish-container", {
  scrollTrigger: {
    trigger: ".aboutUs-container",
    start: "35% 80%",
    endTrigger: ".aboutUs-container",
    end: "80% 60%",
    scrub: 1.2,
  },
  duration: 1,
  x: 40,
  scale: 1.08,
});

gsap.to(".video-wish", {
  scrollTrigger: {
    trigger: ".aboutUs-container",
    start: "70% 80%",
    endTrigger: ".aboutUs-container",
    end: "90% 60%",
    scrub: true,
  },
  y: -30,
  scale: 1.01,
  opacity: 1,
});

gsap.to(".aboutUs-container", {
  scrollTrigger: {
    trigger: ".aboutUs-container",
    start: "bottom bottom",
    endTrigger: ".spacer",
    end: "80% bottom",
    scrub: 1,
    pin: ".aboutUs-container",
    pinSpacing: false,
  },
  y: -400,
});

gsap.to(".spacer", {
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
  y: -200,
});

gsap.from(".last-name", {
  scrollTrigger: {
    trigger: ".spacer",
    start: "top 80%",
    endTrigger: ".last-name",
    end: "top 40%",
    scrub: 1.2,
  },
  y: -200,
  opacity: 0,
});

gsap.from(".coma", {
  scrollTrigger: {
    trigger: ".spacer",
    start: "top 80%",
    endTrigger: ".last-name",
    end: "top 30%",
    scrub: 2,
  },
  x: -300,
  opacity: 0,
});

gsap.to(".palm", {
  scrollTrigger: {
    trigger: ".spacer",
    start: "top top",
    end: "+=600",
    scrub: 2,
  },
  y: -780,
  scale: 1.3,
});

gsap.to(".palm", {
  scrollTrigger: {
    trigger: ".textL1",
    start: "10% 80%",
    end: "+=700",
    scrub: 2,
  },
  yPercent: -40,
});

gsap.to(".gerak", {
  scrollTrigger: {
    trigger: ".textL1",
    start: "10% 80%",
    end: "+=600",
    scrub: 2,
  },
  yPercent: -70,
});

gsap.to(".last-name", {
  scrollTrigger: {
    trigger: ".textL1",
    start: "10% 80%",
    end: "+=600",
    scrub: 2,
  },
  yPercent: -70,
});

let workInfoItems = document.querySelectorAll(".img-right-box");
workInfoItems.forEach(function (item, index) {
  item.style.zIndex = workInfoItems.length - index;
});

gsap.set(".img-right-box", {
  clipPath: function () {
    return "inset(0px 0px 0px 0px)";
  },
});

const animation = gsap.to(".img-right-box:not(:last-child)", {
  clipPath: function () {
    return "inset(0px 0px 100% 0px)";
  },
  stagger: 0.5,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".last-wrapper",
  start: "top top",
  end: "bottom bottom",
  animation: animation,
  scrub: 1.2,
  duration: 1,
});

ScrollTrigger.create({
  trigger: ".last-wrapper",
  start: "top bottom",
  endTrigger: ".textL1",
  end: "bottom top",
  toggleClass: "active1",
});

ScrollTrigger.create({
  trigger: ".textL1",
  start: "50% 20%",
  endTrigger: ".textL2",
  end: "bottom top",
  toggleClass: { targets: ".last-wrapper", className: "active2" },
});

ScrollTrigger.create({
  trigger: ".textL2",
  start: "top 80%",
  end: "bottom top",
  toggleClass: { targets: ".img-right-box", className: "bertukar-color1" },
});

ScrollTrigger.create({
  trigger: ".last-wrapper",
  start: "center 80%",
  end: "bottom top",
  toggleClass: { targets: ".last-wrapper", className: "active3" },
});

ScrollTrigger.create({
  trigger: ".textL3",
  start: "24% 80%",
  end: "80% top",
  toggleClass: { targets: ".img-right-box", className: "bertukar-color2" },
});

ScrollTrigger.create({
  trigger: ".textL4",
  start: "10% 80%",
  end: "bottom top",
  toggleClass: { targets: ".last-wrapper", className: "active4" },
});

ScrollTrigger.create({
  trigger: ".textL4",
  start: "24% 80%",
  end: "80% top",
  toggleClass: { targets: ".img-right-box", className: "bertukar-color3" },
});

ScrollTrigger.create({
  trigger: ".textL5",
  start: "10% 80%",
  end: "bottom top",
  toggleClass: { targets: ".last-wrapper", className: "active5" },
});

ScrollTrigger.create({
  trigger: ".textL5",
  start: "24% 80%",
  end: "80% top",
  toggleClass: { targets: ".img-right-box", className: "bertukar-color4" },
});

gsap.from(".colorImg1", {
  scrollTrigger: {
    trigger: ".img-right-box",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
  },
  y: 100,
});

gsap.to(".colorImg1", {
  scrollTrigger: {
    trigger: ".img-right-box",
    start: "bottom 70%",
    endTrigger: ".textL2",
    end: "bottom top",
    scrub: 1,
  },
  yPercent: -60,
  scale: 0.8,
});

gsap.from(".textL1", {
  scrollTrigger: {
    trigger: ".img-right-box",
    start: "top 80%",
    end: "65% 30%",
    scrub: 1.2,
  },
  opacity: 0,
  y: 200,
});

gsap.from(".colorImg2", {
  scrollTrigger: {
    trigger: ".textL2",
    start: "top 85%",
    end: "30% 40%",
    scrub: 1,
  },
  y: 400,
});

gsap.to(".colorImg2", {
  scrollTrigger: {
    trigger: ".textL2",
    start: "54% 70%",
    endTrigger: ".textL3",
    end: "top top",
    scrub: 1,
  },
  yPercent: -60,
  scale: 0.8,
});

gsap.from(".textL2", {
  scrollTrigger: {
    trigger: ".textL2",
    start: "20% 80%",
    endTrigger: ".textL2",
    end: "center 66%",
    scrub: 1,
  },
  opacity: 0,
  y: 200,
});

gsap.from(".colorImg3", {
  scrollTrigger: {
    trigger: ".textL3",
    start: "top 80%",
    end: "center 60%",
    scrub: 1,
  },
  y: 400,
});

gsap.from(".textL3", {
  scrollTrigger: {
    trigger: ".textL3",
    start: "20% 80%",
    endTrigger: ".last-wrapper",
    end: "center 55%",
    scrub: 1,
  },
  opacity: 0,
  y: 200,
});

gsap.to(".colorImg3", {
  scrollTrigger: {
    trigger: ".textL3",
    start: "40% 50%",
    endTrigger: ".last-wrapper",
    end: "63% top",
    scrub: 1,
  },
  scale: 0.8,
  yPercent: -60,
});

gsap.to(".textL3", {
  scrollTrigger: {
    trigger: ".textL3",
    start: "60% 70%",
    endTrigger: ".last-wrapper",
    end: "bottom 40%",
    scrub: 1,
  },
  yPercent: -60,
});

gsap.from(".colorImg4", {
  scrollTrigger: {
    trigger: ".textL4",
    start: "top 80%",
    end: "center 60%",
    scrub: 1,
  },
  y: 400,
});

gsap.from(".textL4", {
  scrollTrigger: {
    trigger: ".textL4",
    start: "20% 80%",
    endTrigger: ".last-wrapper",
    end: "70% 20%",
    scrub: 1,
  },
  opacity: 0,
  y: 200,
});

gsap.to(".colorImg4", {
  scrollTrigger: {
    trigger: ".textL4",
    start: "50% 55%",
    endTrigger: ".last-wrapper",
    end: "80% top",
    scrub: 1,
  },
  scale: 0.8,
  yPercent: -60,
});

gsap.to(".textL4", {
  scrollTrigger: {
    trigger: ".textL4",
    start: "60% 70%",
    endTrigger: ".last-wrapper",
    end: "bottom 40%",
    scrub: 1,
  },
  yPercent: -60,
});

gsap.from(".colorImg5", {
  scrollTrigger: {
    trigger: ".textL5",
    start: "top 80%",
    end: "center 60%",
    scrub: 1,
  },
  y: 400,
});

gsap.from(".textL5", {
  scrollTrigger: {
    trigger: ".textL5",
    start: "20% 80%",
    endTrigger: ".last-wrapper",
    end: "70% 20%",
    scrub: 1,
  },
  opacity: 0,
  y: 200,
});

gsap.to(".img-right-box", {
  scrollTrigger: {
    trigger: ".textL5",
    start: "60% 70%",
    endTrigger: ".last-wrapper",
    end: "bottom 40%",
    scrub: 1,
  },
});

gsap.to(".textL5", {
  scrollTrigger: {
    trigger: ".textL5",
    start: "60% 70%",
    endTrigger: ".last-wrapper",
    end: "bottom 10%",
    scrub: 1,
  },
});

gsap.to(".last-wrapper", {
  scrollTrigger: {
    trigger: ".last-wrapper",
    start: "bottom bottom",
    endTrigger: ".spacer1",
    end: "+=900",
    scrub: 1.1,
    pin: true,
    pinSpacing: false,
  },
});

const lenis = new Lenis({
  duration: 1.4,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
