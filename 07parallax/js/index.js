let scrollNum = 0;
let documentHeight = 0;
let windowHeight = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");


window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  
  imageAll.forEach((item, idx) => {
    item.style.transform = `translateY(${ -scrollNum / (2 * (totalNum -idx))}px)`;
  })
}) 

