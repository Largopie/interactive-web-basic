let x = 0, y = 0;

const contentAll = document.querySelectorAll(".contWrap div");
console.log(contentAll)

window.addEventListener("mousemove", (event) => {
  console.log(event);
  x = event.pageX;
  y = event.paygeY;

  contentAll.forEach((item) => {
    item.style.left = x + "px";
  })
});