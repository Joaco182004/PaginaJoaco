new fullpage('#fullpage',{
    autoScrolling:true,
    scrollBar:true,
})
const menuBtn=document.querySelector('.menu__btn');
const navigation=document.getElementById('nav__list')
const navCloseBtn=document.getElementById('equis');
const blurOverlay=document.querySelector('.blur__overlay')
const serv1=document.getElementById("servicio1");
const serv2=document.getElementById("servicio2");
const serv3=document.getElementById("servicio3");
const serv4=document.getElementById("servicio4");
const serv5=document.getElementById("servicio5");
const body=document.getElementById("body");
const IS_ACTIVE='is--active';

const toggleNavigation=()=>{
    navigation.classList.toggle(IS_ACTIVE);
    blurOverlay.classList.toggle(IS_ACTIVE)
}
serv1.addEventListener("click",()=>{
    body.scrollTo(0,0);
   navigation.classList.toggle(IS_ACTIVE);
   blurOverlay.classList.toggle(IS_ACTIVE)
})
serv2.addEventListener("click",()=>{
    body.scrollTo(0,window.screen.height);
   navigation.classList.toggle(IS_ACTIVE);
   blurOverlay.classList.toggle(IS_ACTIVE)
})
serv3.addEventListener("click",()=>{
    body.scrollTo(0,window.screen.height*2);
   navigation.classList.toggle(IS_ACTIVE);
   blurOverlay.classList.toggle(IS_ACTIVE)
})
serv4.addEventListener("click",()=>{
    body.scrollTo(0,window.screen.height*3);
   navigation.classList.toggle(IS_ACTIVE);
   blurOverlay.classList.toggle(IS_ACTIVE)


})
serv5.addEventListener("click",()=>{
    body.scrollTo(0,window.screen.height*4);
   navigation.classList.toggle(IS_ACTIVE);
   blurOverlay.classList.toggle(IS_ACTIVE)
})

menuBtn.addEventListener("click",toggleNavigation)
navCloseBtn.addEventListener("click",toggleNavigation)
blurOverlay.addEventListener("click",toggleNavigation)
