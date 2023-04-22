const header = document.getElementById("header");
const btnReload = document.getElementById("btn-reload");
let elements = [];
for (let i = 1; i < 10; i++) {
  elements.push(document.getElementById(i));
}
let togglePlayer = true;
let drawGame = false;

const gameWinnerResponse = (playerWinner) => {
  alert(
    `O jogador que venceu foi o ${
      playerWinner === "X" ? "Jogador 1" : "Jogador 2"
    }, parabéns! Agora, clique em OK para recomeçar`
  );
  resetGame();
  if (playerWinner === "O") {
    togglePlayer = false;
  }
};
const elementVerifyX = (first, second, thirty) => {
  if (
    (first.innerHTML === "X") &
    (second.innerHTML === "X") &
    (thirty.innerHTML === "X")
  ) {
    gameWinnerResponse("X");
  }
};
const verifyPositionsX = () => {
  elementVerifyX(elements[0], elements[1], elements[2]);
  elementVerifyX(elements[0], elements[4], elements[8]);
  elementVerifyX(elements[0], elements[3], elements[6]);
  elementVerifyX(elements[2], elements[4], elements[6]);
  elementVerifyX(elements[1], elements[4], elements[7]);
  elementVerifyX(elements[2], elements[5], elements[8]);
  elementVerifyX(elements[3], elements[4], elements[5]);
  elementVerifyX(elements[6], elements[7], elements[8]);
};
const elementVerifyO = (first, second, thirty) => {
  if (
    (first.innerHTML === "O") &
    (second.innerHTML === "O") &
    (thirty.innerHTML === "O")
  ) {
    gameWinnerResponse("O");
  }
};
const verifyPositionsO = () => {
  elementVerifyO(elements[0], elements[1], elements[2]);
  elementVerifyO(elements[0], elements[4], elements[8]);
  elementVerifyO(elements[0], elements[3], elements[6]);
  elementVerifyO(elements[2], elements[4], elements[6]);
  elementVerifyO(elements[1], elements[4], elements[7]);
  elementVerifyO(elements[2], elements[5], elements[8]);
  elementVerifyO(elements[3], elements[4], elements[5]);
  elementVerifyO(elements[6], elements[7], elements[8]);
};
const verifyDraw = () => {
  const isDraw = elements.every((element) => element.innerHTML !== "");
  if (isDraw) {
    alert(`O jogo deu empate, clique em OK para recomeçar`);
    resetGame();
  }
};

const putCaracter = (id) => {
  const element = document.getElementById(id);
  if (element.innerHTML === "") {
    if (togglePlayer) {
      togglePlayer = false;
      element.innerHTML = "X";
      element.classList.add("letter");
      header.innerHTML = "Vez do jogador 2";
      return element.innerHTML;
    }
    if (!togglePlayer) {
      togglePlayer = true;
      element.innerHTML = "O";
      element.classList.add("letter");
      header.innerHTML = "Vez do jogador 1";
      return element.innerHTML;
    }
  }
};

const clearTable = () => {
  elements.forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("letter");
  });
};

const resetGame = () => {
  clearTable();
  togglePlayer = true;
  header.innerHTML = "Jogo iniciado";
};

const getId = (number) => {
  putCaracter(number);
  verifyPositionsX();
  verifyPositionsO();
  verifyDraw();
};

btnReload.addEventListener("click", () => {
  location.reload();
});
