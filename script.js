const card = document.getElementById('photocard');

let isDragging = false;
let offsetX, offsetY;

card.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  card.classList.add('lifted');
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    card.style.left = `${e.pageX - offsetX}px`;
    card.style.top = `${e.pageY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    card.classList.remove('lifted');
  }
});

card.addEventListener('touchstart', (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - card.offsetLeft;
  offsetY = touch.clientY - card.offsetTop;
  card.classList.add('lifted');
});

document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    card.style.left = `${touch.clientX - offsetX}px`;
    card.style.top = `${touch.clientY - offsetY}px`;
  }
});

document.addEventListener('touchend', () => {
  isDragging = false;
  card.classList.remove('lifted');
});

