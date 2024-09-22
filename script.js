let time = gsap.timeline()

// page 1 animation
time.from("#page1-content nav", {
    x:60,
    duration:1,
    delay:0.3,
    opacity:0,
    ease: "power1",
})

time.from(".heading h1", {
    y:40,
    duration:1,
    delay:0.1,
    opacity:0,
    stagger:0.1,
    ease: "power1",
})