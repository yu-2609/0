const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const resetButton = document.querySelector(".resetButton");
const timeDisplay = document.querySelector(".time");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let countNum = 0;
let guessHistory = [];
const maxTries = 10;

let secondsElapsed = 0;
let timerInterval = null;

console.log("觀察隨機的數字：", randomNumber);

function startTimer() {
  timerInterval = setInterval(() => {
    secondsElapsed++;
    timeDisplay.textContent = secondsElapsed;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function checkGuess() {
  if (timerInterval === null) startTimer(); // 第一次猜時才開始計時

  const userGuess = Number(guessField.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    result.textContent = "請輸入 1 到 100 之間的數字！";
    result.style.backgroundColor = "orange";
    return;
  }

  countNum++;
  count.textContent = "猜測次數：" + countNum;
  guessHistory.push(userGuess);
  guesses.textContent = guessHistory.join(", ");

  if (userGuess === randomNumber) {
    result.textContent = "猜測結果：恭喜你猜對了！";
    result.style.backgroundColor = "lightgreen";
    stopTimer();
    setGameOver();
  } else if (countNum >= maxTries) {
    result.textContent = "遊戲結束！正確答案是：" + randomNumber;
    result.style.backgroundColor = "red";
    stopTimer();

    // 🌐 自動跳轉到原神官網
    window.location.href = "https://genshin.hoyoverse.com/";

    setGameOver(); // 實際上這行不會執行，因為跳轉會中斷 JS 執行
  } else if (userGuess < randomNumber) {
    result.textContent = "猜測結果：數字太小！";
    result.style.backgroundColor = "lightyellow";
  } else {
    result.textContent = "猜測結果：數字太大！";
    result.style.backgroundColor = "lightyellow";
  }

  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton.style.display = "inline-block";
}

function resetGame() {
  countNum = 0;
  guessHistory = [];
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("新遊戲隨機數字：", randomNumber);

  count.textContent = "";
  guesses.textContent = "";
  result.textContent = "";
  result.style.backgroundColor = "";
  guessField.value = "";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  resetButton.style.display = "none";
  guessField.focus();

  // 重置計時器
  stopTimer();
  secondsElapsed = 0;
  timeDisplay.textContent = "0";
  timerInterval = null;
}

// ⌨️ 支援 Enter 提交
guessField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

guessSubmit.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
