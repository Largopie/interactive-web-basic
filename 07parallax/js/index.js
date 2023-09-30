let scrollNum = 0;
let documentHeight = 0;
let windowHeight = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");
let x = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  
  imageAll.forEach((item, idx) => {
    item.style.transform = `translateY(${ -scrollNum / (2 * (totalNum -idx))}px)`;
  })
})

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  imageAll[4].style.transform = `scale(1.05) translateX(${-x / 50}px)`;
  imageAll[5].style.transform = `scale(1.05) translateX(${-x / 100}px)`;
  subPageImage.style.transform = `scale(1.1) translateX(${-x / 20}px)`
  
})


