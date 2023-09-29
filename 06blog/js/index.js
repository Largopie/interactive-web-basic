const progressBar = document.querySelector(".bar");

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight + 400;
  
  per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";

  
})

const percent = (num, totalNum) => {
  return (num / totalNum * 100).toFixed(0);
}