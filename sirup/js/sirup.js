let x = 0, y = 0;


const contentAll = document.querySelectorAll(".contWrap img");

// console.log(contentAll);


const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

// console.log(human);

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

  shadow.style.transform = `translateX(${x / 35}px)`;
  date.style.transform = `translateX(${x / 15}px)`;
  human.style.transform = `translateX(${-x / 30}px)`;
  textImg.style.transform = `translateX(${-x / 15}px)`;
};


