document.addEventListener("DOMContentLoaded", function () {
  const experienciaBtn = document.createElement("button");
  experienciaBtn.className = "btn-transparent";
  experienciaBtn.textContent = "Você achou um Easter Egg!";
  experienciaBtn.id = "show-easter-egg";
  experienciaBtn.style.position = "absolute";

  function getRandomPosition() {
    const header = document.querySelector("header");
    const headerRect = header.getBoundingClientRect();
    const randomX = Math.floor(Math.random() * headerRect.width);
    const randomY = Math.floor(Math.random() * headerRect.height);
    return { x: randomX, y: randomY };
  }

  const position = getRandomPosition();
  experienciaBtn.style.left = `${position.x}px`;
  experienciaBtn.style.top = `${position.y}px`;

  experienciaBtn.addEventListener("click", function () {
    const easterEgg = document.getElementById("easter-egg");
    if (easterEgg.classList.contains("d-none")) {
      easterEgg.classList.remove("d-none");
    } else {
      easterEgg.classList.add("d-none");
    }
  });

  document.body.appendChild(experienciaBtn);
});

// JOGO DO EASTER EGG KKKK

const secretCode =
  "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
let inputSequence = [];

window.addEventListener("keydown", event => {
  inputSequence.push(event.key);
  inputSequence = inputSequence.slice(-10); // Mantém apenas os últimos 10 inputs.

  if (inputSequence.toString() === secretCode) {
    const body = document.body;
    if (body.classList.contains("easter-egg")) {
      body.classList.remove("easter-egg");
      body.style.animationDuration = "15s"; // Restaura a velocidade original da animação.
      alert("Modo secreto desativado!");
    } else {
      body.classList.add("easter-egg");
      body.style.animationDuration = "5s"; // Acelera a animação.
      alert("Você ativou o modo secreto!");
    }
    inputSequence = []; // Limpa a sequência após ativação.
  }
});
