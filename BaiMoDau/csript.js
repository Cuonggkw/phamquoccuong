'use strict';

// Math.random() * 20: lấy số ngầu nhiên tự 0 đến 19;
let secretNumber = Math.trunc(Math.random() * 20) + 1; // + thêm 1 để lấy lên 20
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // textContent: là một chuỗi string lấy ký tự trống và ký tự xuống dòng và in ra màn hình.
  // bdocument.querySelector: lấy giá đầu tiên trong tài liêu
};

document.querySelector('.check').addEventListener('click', function () {
  // addEventListener:cho phép bạn gắn một hàm xử lý sự kiện vào một phần tử cụ thể trên một trang web
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // typeof: toán tử trả về kiểu của đối số.

  if (!guess) {
    // trả về true or false
    // Nhập số 0 nó sẽ trả về ⛔️ No number!
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
