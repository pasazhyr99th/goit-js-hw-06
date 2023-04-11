function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorChangeBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

colorChangeBtn.addEventListener('click', () => {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = `${currentColor.textContent}`;
});