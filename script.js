// landing page animation
function page1animation(){
let time = gsap.timeline()
time.from("#page1-content nav", {
    y:-80,
    duration:0.5,
    delay:0.2,
    opacity:0,
    ease: "power1",
})

time.from(".heading h1", {
    y:80,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.1,
    ease: "circ",
})
}
page1animation();


// page 2 animation
function page2animation(){
    gsap.from("#page2 #nav", {
        y:60,
        duration:0.5,
        opacity:0,
        stagger:0.25,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // markers:true,
            start:"top 40%",
            end:"top 37",
            scrub:2,
        }
    })
    
    gsap.from("#page2-content h3", {
        y:120,
        duration:1,
        opacity:0,
        stagger:0.25,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // markers:true,
            start:"top 47%",
            end:"top 37%",
            scrub:2,
        }
    })
}
page2animation();