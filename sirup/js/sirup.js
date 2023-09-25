let x = 0, y = 0;

const contentAll = document.querySelectorAll(".contWrap div");
console.log(contentAll);

window.addEventListener("mousemove", (event) => {
  x = event.pageX - window.innerWidth / 2;
  y = event.pageY - window.innerHeight / 2;

  // console.log(y);

  mouseMoveFunc();
});

const mouseMoveFunc = () => {
  // contentAll.forEach((item) => {
  //   item.style.left = x + "px";
  // });
};