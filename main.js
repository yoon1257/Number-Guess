let computerNum = 0;
let inputArea = document.getElementById("input-area");
let goButton = document.getElementById("go-button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameOver = false;
let history = [];

const pickRandomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
};

const play = () => {
  let userNum = inputArea.value;

  if (userNum < 1 || userNum > 100) {
    resultArea.textContent = "범위 밖의 숫자입니다. ";
    return; // return은 함수의 실행을 멈추게 해준다.
  }
  if (history.includes(userNum)) {
    resultArea.textContent = "동일한 숫자를 입력했습니다.";
    return;
  }
  chances--;
  chanceArea.textContent = `남은기회: ${chances}번`;

  if (computerNum > userNum) {
    resultArea.textContent = "up";
  } else if (computerNum < userNum) {
    resultArea.textContent = "down";
  } else if (computerNum == userNum) {
    resultArea.textContent = "정답입니다";
    gameOver = true;
  }

  history.push(userNum);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    goButton.disabled = true;
  }
};

const reset = () => {
  inputArea.value = "";
  pickRandomNum();
  resultArea.textContent = "리셋되었습니다. 숫자를 입력해주세요";
};
// TDZ 영역이 발생될수 있으므로 top to button 형식으로 적어주기
goButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
inputArea.addEventListener("focus", function () {
  inputArea.value = ""; // 익명함수
});

pickRandomNum();
