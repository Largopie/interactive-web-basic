let x = 0, y = 0;

let targetX = 0, targetY = 0;

const speed = .1;


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

  // console.log(x, y);
  
});

const mouseMoveFunc = () => {
  // contentAll.forEach((item) => {
  //   item.style.left = x + "px";
  // });
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  shadow.style.transform = `rotateY(${targetX}deg)`;
  date.style.transform = `translateX(${targetX / 15}px) translateY(${targetY / 25}px)`;
  human.style.transform = `translateX(${-targetX / 30}px) translateY(${-targetY / 40}px`;
  textImg.style.transform = `translateX(${-targetX / 15}px) translateY(${-targetY / 25}px)`;
};

const loop = () => {
  mouseMoveFunc();
  // mouseMoveYFunc();
  window.requestAnimationFrame(loop);
};

loop();

