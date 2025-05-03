const green = document.querySelector(".green");

gsap.from(green,{
    opacity:0,
    y:20,
    duration:3.5,

    scrollTrigger:{
        scroller:'body',
        trigger:green,
    }
});

let box1 = document.querySelector(".textContainer1");
let box2 = document.querySelector(".textContainer2");
let box3 = document.querySelector(".textContainer3");
let box4 = document.querySelector(".textContainer4");
let box5 = document.querySelector(".textContainer5");
gsap.from(box5,{
    opacity:0,
    x:20,
    duration:2,

    scrollTrigger:{
        scroller:'body',
        trigger:box5,
        start:'top 70%',
    }
})
gsap.from(box4,{
    opacity:0,
    x:20,
    duration:2,

    scrollTrigger:{
        scroller:'body',
        trigger:box4,
        start:'top 70%',
    }
})
gsap.from(box3,{
    opacity:0,
    x:20,
    duration:2,

    scrollTrigger:{
        scroller:'body',
        trigger:box3,
        start:'top 70%',
    }
})
gsap.from(box2,{
    opacity:0,
    x:20,
    duration:2,

    scrollTrigger:{
        scroller:'body',
        trigger:box2,
        start:'top 70%',
    }
})
gsap.from(box1,{
    opacity:0,
    x:20,
    duration:2,

    scrollTrigger:{
        scroller:'body',
        trigger:box1,
        start:'top 70%',
    }
})

gsap.to(".wrapper .imageConatiner",{
    Transform:"translateX(-320%)",
    scrollTrigger:{
        trigger:".wrapper ",
        scroller:'body',
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

let loader = document.querySelector('.loader');
setTimeout(function(){
    loader.style.opacity = 0;
},2000);

gsap.from(".latest",{
    opacity:0,
    duration:1.5,
    y:20,
    delay:0.5,
    scrollTrigger:{
        trigger:".latest ",
        scroller:'body',
        start:"top 70%",
    }
})
// let popUp = document.querySelector('.info3');
gsap.from(".info3",{
    opacity:0,
    duration:1,
    y:20,
    delay:0.5,

    scrollTrigger:{
        trigger:".info3",
        scroller:'body',
        start:"top 100%",
    }
})
gsap.from(".info6",{
    opacity:0,
    duration:1,
    y:20,
    delay:0.5,

    scrollTrigger:{
        trigger:".info6",
        scroller:'body',
        start:"top 100%",
    }
})

gsap.from(".info4",{
    opacity:0,
    duration:1,
    y:20,
    delay:0.5,

    scrollTrigger:{
        trigger:".info4",
        scroller:'body',
        start:"top 100%",
    }
})

gsap.from(".info5",{
    opacity:0,
    duration:1,
    y:20,
    delay:0.5,

    scrollTrigger:{
        trigger:".info5",
        scroller:'body',
        start:"top 100%",
    }
})


let menu = document.querySelector(".menu");
let cross = document.querySelector(".band");

let tl = gsap.timeline();
tl.to(".fullNav",{
    top:0,
});
tl.from(".fullNav h4",{
    opacity:0,
    y:-20,
    stagger:0.2,
    delay:0.5,
})

tl.pause()

menu.addEventListener("click",function(){
    menu.style.display = "none",
    cross.style.display="block"
    tl.play()
});
cross.addEventListener("click",function(){
    menu.style.display = "block",
    cross.style.display="none",
    tl.reverse()
})

