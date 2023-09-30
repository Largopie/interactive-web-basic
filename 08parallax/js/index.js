let scrollNum = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, idx) => {
    item.style.transform = `perspective(400px) translate3d(0, 0, ${scrollNum / (2 * (totalNum - idx))}px)`;
  })
})