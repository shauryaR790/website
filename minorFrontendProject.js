// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var elemC = document.querySelector('.elemContainer');
var fixed = document.querySelector('.fixed-image');

elemC.addEventListener('mouseenter',function(){
    fixed.style.display = 'block'
})

elemC.addEventListener('mouseleave',function(){
    fixed.style.display = 'none'
})

var elem1 = document.querySelector('#elem1');
elem1.addEventListener('mouseenter' ,function(){
    var image1 = elem1.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image1})`;
});

var elem2 = document.querySelector('#elem2');
elem2.addEventListener('mouseenter' ,function(){
    var image2 = elem2.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image2})`;
})

var elem3 = document.querySelector('#elem3');
elem3.addEventListener('mouseenter' ,function(){
    var image3 = elem3.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image3})`;
})

var elem4 = document.querySelector('#elem4');
elem4.addEventListener('mouseenter' ,function(){
    var image4 = elem4.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image4})`;
})

var elem5 = document.querySelector('#elem5');
elem5.addEventListener('mouseenter' ,function(){
    var image5 = elem5.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image5})`;
})

var elem6 = document.querySelector('#elem6');
elem6.addEventListener('mouseenter' ,function(){
    var image6 = elem6.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image6})`;
})
// var tl = gsap.timeline();
// let tl = gsap.timeline();

gsap.from('.info h3',{
    opacity:0,
    duration:2,
    // y:150,

    scrollTrigger:{
        trigger:' .info h3',
        scroller:'body',
        // markers: true,
        start:'top 65%',
        stagger:1,
    }
});

gsap.from('.page5 .bottom h1',{
    opacity:0,
    duration:4,
    // y:150,

    scrollTrigger:{
        trigger:'.page5 .bottom h1',
        scroller:'body',
        // markers: true,
        start:'top 80%'
    }
})
function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

swiperAnimation();

let loader = document.querySelector('.loader');
setTimeout(function(){
    loader.style.top = '-100%';
},4000);