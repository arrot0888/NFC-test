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
