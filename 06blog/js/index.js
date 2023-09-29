const header = document.querySelector("header");
const progressBar = document.querySelector(".bar");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight + 400;

  per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";

  if (scrollNum >= 400) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }


})

const percent = (num, totalNum) => {
  return (num / totalNum * 100).toFixed(0);
}