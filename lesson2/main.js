const block = document.querySelector('.block');
const click = document.querySelector('#click');
let position = 0;
let topPosition = 0;
let positionLeft = 350;
let bottomPosition = 350;

const move = () => {
  if (position < 350) {
    position++;
    block.style.left = `${position}px`;
    setTimeout(() => {
      move()
    }, 0.5)
  }
  else if (topPosition < 350 && position >= 350) {
    topPosition++;
    block.style.top = `${topPosition}px`;
    setTimeout(() => {
      move()
    }, 0.5)
  }

  else if (topPosition >= 350 && position >= 350 && positionLeft >= 0) {
    positionLeft--
    block.style.left = `${positionLeft}px`
    setTimeout(() => {
      move()
    }, 0.5)
  }
  else if (topPosition >= 350 && position >= 350 && positionLeft <= 0 && bottomPosition >= 0) {
    bottomPosition--;
    block.style.top = `${bottomPosition}px`
    setTimeout(() => {
      move();
    }, 0.5)
  }
  if (bottomPosition <= 0) {
    position = 0;
    topPosition = 0;
    positionLeft = 350;
    bottomPosition = 350;
  }

}
click.addEventListener('click', move)

let i = 0;
setInterval(() => {
  i++;
  console.log("Прошло " + i + " сек.");
}, 1000);