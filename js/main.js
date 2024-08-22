let tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  stagger: 0.15,
  delay: 0.5,
  duration: 0.8,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
});

tl.from("#main img", {
  x: 100,
  opacity: 0,
  rotate: 45,
  stagger: 0.5,
  duration: 0.8,
});
