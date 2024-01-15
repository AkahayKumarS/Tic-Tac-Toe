let array = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let buttonList = document.querySelectorAll(".table");
let music;

let checkWinner = function () {
  for (let i = 0; i < 9; i += 3) {
    if (
      array[i] === array[i + 1] &&
      array[i + 1] === array[i + 2] &&
      array[i + 2] === currentPlayer
    ) {
      console.log("Congrats " + currentPlayer + " wins!!");
      music = new Audio("game-over.mp3");
      music.play();
      removeClickListeners();

      let message = document.createElement("div");
      message.classList.add("message");
      message.innerHTML = `Congrats!! Player ${currentPlayer} wins!!`;
      let box = document.querySelector(".box-container");
      box.prepend(message);
      if (currentPlayer === "X") {
        for (let j = i; j <= i + 2; j++) {
          document.getElementById(j).style.background = "lightpink";
        }
      } else if (currentPlayer === "O") {
        for (let j = i; j <= i + 2; j++) {
          document.getElementById(j).style.background = "lightblue";
          document.getElementById(j).style.color = "blue";
        }
      }
      return;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      array[i] === array[i + 3] &&
      array[i + 3] === array[i + 6] &&
      array[i + 6] === currentPlayer
    ) {
      console.log("Congrats " + currentPlayer + " wins!!");
      music = new Audio("game-over.mp3");
      music.play();
      removeClickListeners();

      let message = document.createElement("div");
      message.classList.add("message");
      message.innerHTML = `Congrats!! Player ${currentPlayer} wins!!`;
      let box = document.querySelector(".box-container");
      box.prepend(message);
      if (currentPlayer === "X") {
        for (let j = i; j <= i + 6; j += 3) {
          document.getElementById(j).style.background = "lightpink";
        }
      } else if (currentPlayer === "O") {
        for (let j = i; j <= i + 6; j += 3) {
          document.getElementById(j).style.background = "lightblue";
          document.getElementById(j).style.color = "blue";
        }
      }
      return;
    }
  }

  if (
    array[0] === array[4] &&
    array[4] === array[8] &&
    array[8] === currentPlayer
  ) {
    console.log("Congrats " + currentPlayer + " wins!!");
    music = new Audio("game-over.mp3");
    music.play();
    removeClickListeners();

    let message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `Congrats!! Player ${currentPlayer} wins!!`;
    let box = document.querySelector(".box-container");
    box.prepend(message);
    if (currentPlayer === "X") {
      for (let i = 0; i <= 8; i += 4) {
        document.getElementById(i).style.background = "lightpink";
      }
    } else if (currentPlayer === "O") {
      for (let i = 0; i <= 8; i += 4) {
        document.getElementById(i).style.background = "lightblue";
        document.getElementById(i).style.color = "blue";
      }
    }
    return;
  }
  if (
    array[2] === array[4] &&
    array[4] === array[6] &&
    array[6] === currentPlayer
  ) {
    console.log("Congrats " + currentPlayer + " wins!!");
    music = new Audio("game-over.mp3");
    music.play();
    removeClickListeners();

    let message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `Congrats!! Player ${currentPlayer} wins!!`;
    let box = document.querySelector(".box-container");
    box.prepend(message);
    if (currentPlayer === "X") {
      for (let i = 2; i <= 6; i += 2) {
        document.getElementById(i).style.background = "lightpink";
      }
    } else if (currentPlayer === "O") {
      for (let i = 2; i <= 6; i += 2) {
        document.getElementById(i).style.background = "lightblue";
        document.getElementById(i).style.color = "blue";
      }
    }
    return;
  }
  if (!array.includes("")) {
    console.log("It's a Tie!");
    let message = document.createElement("div");
    message.classList.add("tie");
    message.innerHTML = `It's a Tie!!`;
    let box = document.querySelector(".box-container");
    box.prepend(message);
    music = new Audio("gameTied.wav");
    music.play();
    removeClickListeners();
    return;
  }
};
let removeClickListeners = function () {
  buttonList.forEach(function (button) {
    button.removeEventListener("click", makeMove);
  });
};

let makeMove = function (event) {
  let index = event.target.id;

  if (array[index] !== "") {
    music = new Audio("incorrectMove.mp3");
    music.play();
    console.log("Cell already taken. Choose another cell.");
    return;
  }
  music = new Audio("tap-notification.mp3");
  music.play();

  array[index] = currentPlayer;
  event.target.innerHTML = currentPlayer;
  if (currentPlayer === "X") {
    event.target.style.color = "red";
  } else if (currentPlayer === "O") {
    event.target.style.color = "yellow";
  }
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

buttonList.forEach(function (button) {
  button.addEventListener("click", makeMove);
});
