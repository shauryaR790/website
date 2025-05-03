gsap.from(".leftNav h2",{
    opacity:0,
    duration:1,
    delay:.5,
    stagger:.2,
    x:-10,
});
gsap.from(".rightNav h2",{
    opacity:0,
    duration:1,
    delay:.5,
    stagger:.2,
    x:10,
});
gsap.from(".rock3",{
    opacity:0,
    duration:1.5,
    y:-50,
    x:-30,

    // scrollTrigger:{
    //     scroller:"body",
    //     trigger:".rock3",
    //     // markers:true,
    //     start:"top 26%"
    // }
});
gsap.from(".rock1",{
    opacity:0,
    duration:.8,
    y:20,
    x:-10,

    scrollTrigger:{
        scroller:"body",
        trigger:".rock1",
        // markers:true,
        start:"top 60%"
    }
});
gsap.from(".rock2",{
    opacity:0,
    duration:.8,
    y:-20,
    x:10,

    scrollTrigger:{
        scroller:"body",
        trigger:".rock2",
        // markers:true,
        start:"top 50%"
    }
});
gsap.from(".manystar1",{
    opacity:0,
    duration:0.9,
    y:-20,
    x:-10,

    scrollTrigger:{
        scroller:"body",
        trigger:".manystar1",
        // markers:true,
        start:"top 60%"
    }
});
gsap.to(".page2 h1",{
    // opacity:0,
    color:"#d78ff2",
    duration:0.9,

    scrollTrigger:{
        scroller:"body",
        trigger:".page2 h1",
        // markers:true,
        start:"top 60%"
    }
});
gsap.to(".page3 h1",{
    // opacity:0,
    color:"#d78ff2",
    duration:0.9,

    scrollTrigger:{
        scroller:"body",
        trigger:".page3 h1",
        // markers:true,
        start:"top 60%"
    }
});
gsap.from(".page3 .container img",{
    opacity:0,
    duration:0.9,
    x:-10,
    stagger:.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".page3 img",
        // markers:true,
        start:"top 60%"
    }
});
gsap.from(".page3 .rocky1",{
    opacity:0,
    duration:1.5,
    x:10,
    y:60,

    scrollTrigger:{
        scroller:"body",
        trigger:".page3 .rocky1",
        // markers:true,
        start:"top 60%"
    }
});
gsap.to(".page4 h1",{
    color:"#d78ff2",
    duration:0.9,

    scrollTrigger:{
        scroller:"body",
        trigger:".page4 h1",
        // markers:true,
        start:"top 60%"
    }
});
gsap.from(".page4 h4",{
    opacity:0,
    duration:1,
    stagger:.6,

    scrollTrigger:{
        scroller:"body",
        trigger:".page4",
        // markers:true,
        start:"top 50%",
    }

});

gsap.from(".page4 h5",{
    opacity:0,
    duration:1,
    x:-10,
    stagger:.6,

    scrollTrigger:{
        scroller:"body",
        trigger:".page4",
        // markers:true,
        start:"top 55%",
    }

});

