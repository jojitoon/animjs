const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
const ball = document.getElementById('ball');

let currentY = 0;
let currentX = 0;

let down = true;
let downX = true;

let currentY1 = screenHeight;
let currentX1 = screenWidth;

let down1 = true;
let downX1 = true;

let speed = 0.1;
let timer = null;
function bounceBall() {
  if (timer) {
    clearTimeout(timer);
  }
  const ball = document.getElementById('ball');
  const ball1 = document.getElementById('ball1');
  const ballHeight = ball.clientHeight;
  const ballHeight1 = ball1.clientHeight;
  const speedSize = ballHeight * speed;
  const speedSize1 = ballHeight1 * speed;

  let newY = down ? speedSize + currentY : currentY - speedSize;
  let newX = downX ? currentX + speedSize : currentX - speedSize;

  let newY1 = down1 ? speedSize1 + currentY1 : currentY1 - speedSize1;
  let newX1 = downX1 ? currentX1 + speedSize1 : currentX1 - speedSize1;

  if (newY > screenHeight) {
    newY = screenHeight;
    down = false;
  } else if (newY < 0) {
    newY = 0;
    down = true;
  }

  if (newX > screenWidth) {
    newX = screenWidth;
    downX = false;
  } else if (newX < 0) {
    newX = 0;
    downX = true;
  }

  if (newY1 > screenHeight) {
    newY1 = screenHeight;
    down1 = false;
  } else if (newY1 < 0) {
    newY1 = 0;
    down1 = true;
  }

  if (newX1 > screenWidth) {
    newX1 = screenWidth;
    downX1 = false;
  } else if (newX1 < 0) {
    newX1 = 0;
    downX1 = true;
  }

  if (Math.abs(newX - newX1) < 35 && Math.abs(newY - newY1) < 35) {
    down = !down;
    downX = !downX;
    downX1 = !downX1;
    down1 = !down1;
  }

  ball.style.top = newY + 'px';
  ball.style.left = newX + 'px';
  ball1.style.top = newY1 + 'px';
  ball1.style.left = newX1 + 'px';
  currentY = newY;
  currentX = newX;
  currentY1 = newY1;
  currentX1 = newX1;

  setTimeout(bounceBall, 16.67);
}
if (ball) {
  //   setInterval(() => {
  bounceBall();
  //   }, 16.67);
}
