

function navbarAnimation() {
    gsap.from("#nav",{
        opacity:0,
        y:50,
        delay:0.3,
        duration:0.5,
    })
   

    
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to("#nav-left svg", {
        y: "-100%",
       
        scrollTrigger: {
            trigger: "#nav", 
            start: "top top", 
            end: "bottom top", 
            scrub: true, 
            
        }
    });
    gsap.to("#nav ul", {
        y: "-100%",
       
        scrollTrigger: {
            trigger: "#nav", 
            start: "top top", 
            end: "bottom top", 
            scrub: true, 
            
        }
    });
}
navbarAnimation()

function page1Animation() {
    const videoContainer = document.getElementById('videoContainer')
    const play = document.getElementById('play')
    const heading = document.querySelectorAll('#heading h1')



    gsap.from(heading, {
        y: 80,
        delay: 0.3,
        stagger: 0.4,
        opacity: 0,
        duration: 0.7
    })

    gsap.from('#videoContainer video', {
        scale: 0,
        delay: 1,
        duration: 0.8
    })

    videoContainer.addEventListener('mouseenter', () => {
        gsap.to(play, {
            scale: 1,
            opacity: 1,


        })

    })

    videoContainer.addEventListener('mousemove', (dets) => {
        gsap.to(play, {
            left: dets.x - 50,
            top: dets.y - 50
        })
    })

    videoContainer.addEventListener('mouseleave', () => {
        gsap.to(play, {
            scale: 0,
            opacity: 0
        })
    })


}
page1Animation()

function cursorAnimation() {
    document.addEventListener('mousemove', (dets) => {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelectorAll('.product-container').forEach((product) => {
        product.addEventListener('mouseenter', () => {
            gsap.to("#cursor", {
                scale: 1
            })
        })
    })

    document.querySelectorAll('.product-container').forEach((product) => {
        product.addEventListener('mouseleave', () => {
            gsap.to("#cursor", {
                scale: 0
            })
        })
    })
}

cursorAnimation()