const startBtn = document.getElementById('start-btn');
const result = document.getElementById('result');
const gameArea = document.getElementById('game-area');

let startTime;

startBtn.addEventListener('click', () => {
  result.textContent = "";
  startBtn.style.display = 'none';

  // 무작위 대기 시간 (1초 ~ 3초)
  const delay = Math.floor(Math.random() * 2000) + 1000;

  const reactionBtn = document.createElement('button');
  reactionBtn.id = 'reaction-btn';
  reactionBtn.textContent = '지금 클릭!';
  reactionBtn.style.display = 'none';
  gameArea.appendChild(reactionBtn);

  setTimeout(() => {
    reactionBtn.style.display = 'inline-block';
    startTime = Date.now();
  }, delay);

  reactionBtn.addEventListener('click', () => {
    const reactionTime = Date.now() - startTime;
    result.textContent = `🎯 당신의 반응속도: ${reactionTime}ms`;
    reactionBtn.remove();
    startBtn.style.display = 'inline-block';
    startBtn.textContent = '다시 시작';
  });
});
