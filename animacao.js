gsap.registerPlugin(ScrollTrigger);
 gsap.registerPlugin(SplitText);
 



 const intro = gsap.timeline({
  scrollTrigger: {
    trigger: ".inicio",
    start: "top top",
    end: "+=1000",
    scrub: 1,
    pin: true
  }
});

intro.to(".gota", {
  y: 300,
  ease: "none",
  opacity:1,
});

intro.to(".logo", {
  clipPath: "inset(0% 0 0 0)",
  ease: "none"
}, 0.1);
  

  const panels = gsap.utils.toArray(".panel");
  

  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
      trigger: ".horizontal",
      pin: true,
      scrub: 1,
      end: () => "+=" + document.querySelector(".horizontal").offsetWidth,
      snap: {
      snapTo: 1 / (panels.length - 1),
      duration: {
        min: 0.2,
        max: 0.6
      },
      ease: "power2.inOut"
    },

    invalidateOnRefresh: true
  }
     
  });


  gsap.to(".campanha", {
    opacity:1,
    duration:2,
    scrollTrigger:{
      trigger:".final",
      scrub:2,
      pin:true
    }
  })