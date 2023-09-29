const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const dimd = document.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight + coverHeight;

  per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";

  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    coverTitle.style.top = scrollNum / 10 + "px";
    header.classList.remove("fixed");
  }
  coverWrap.style.backgroundPosition = `center ${ -scrollNum / 3 }px`
  dimd.style.backgroundColor = `rgba(0, 0, 0, ${ 0.4 + scrollNum / 1000 })`;
})

const percent = (num, totalNum) => {
  return (num / totalNum * 100).toFixed(0);
}