const totoroEl = document.querySelector('#totoro');
const sceneEl = document.querySelector('a-scene');
const scoreEl = document.querySelector('#score');

function randomPosition() {
  return {
    x: (Math.random() - 0.5) * 20,
    y: 0,
    z: (Math.random() - 0.5) * 20
  };
}

let score = 0;
function updateScore() {
  scoreEl.setAttribute('value', `Score: ${score}`);
}

function createClone() {
  const clone = totoroEl.cloneNode();
  clone.setAttribute('position', randomPosition());
  clone.addEventListener('click', () => {
    clone.dispatchEvent(new Event('collect'));
  });
  clone.addEventListener('animationcomplete', () => {
    clone.setAttribute('position', randomPosition());
    clone.setAttribute('scale', '0.1 0.1 0.1');
    score++;
    updateScore();
  });
  sceneEl.appendChild(clone);
}

for (let i = 0; i < 15; i++) {
  createClone();
}
updateScore();