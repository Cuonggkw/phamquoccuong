const player0EL = document.querySelector('.player-0');
const player1EL = document.querySelector('.player-1');
// Hai phương thức gọi ID đều đc
const score0El = document.querySelector('#score-0');
const score1El = document.getElementById('score-1');
const current0EL = document.getElementById('current-0');
const current1EL = document.getElementById('current-1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

let scores, currentScore, activePlayer, playing;

// Điều kiện bắt đầu.
const init = function () {
  scores = [0, 0];
  currentScore = 0; // Điểm hiện tại

  activePlayer = 0; // người chơi.
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player-winner');
  player1EL.classList.remove('player-winner');
  player0EL.classList.add('player-active');
  player1EL.classList.remove('player-active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Bắt đầu từ chs 0 nếu thải ra số 1 thì sẽ tới lượt của người chs 1.
  activePlayer = activePlayer === 0 ? 1 : 0;
  // console.log(activePlayer);
  player0EL.classList.toggle('player-active');
  player1EL.classList.toggle('player-active');
};

// Chức năng tung xúc xắc

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Tạo một cuộn xúc xắc ngẫu nhiên
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Hiển thị xúc xắc
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // 3. Kiểm tra đã thảy 1
    if (dice !== 1) {
      // được thải thêm 1 lần xúc xắc
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      // Chuyển sang người chơi tiếp theo
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Thêm điểm hiện tại vào điểm của người chơi đang hoạt động
    scores[activePlayer] += currentScore;

    diceEL.classList.add('hidden');
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Kiểm tra xem điểm của người chơi có >= 100 không
    if (scores[activePlayer] >= 30) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove('player-active');
    } else {
      // Chuyển sang người chơi tiếp theo
      switchPlayer();
    }
  }
});

// New Game.
btnNew.addEventListener('click', init);

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceEL.classList.remove('hidden');
//     diceEL.src = `dice-${dice}.png`;

//     if (dice != 1) {
//       currentScore += dice;
//       document.getElementById(`current-${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       currentScore = 0;
//       document.getElementById(`current-${activePlayer}`).textContent = 0;
//       activePlayer = activePlayer == 0 ? 1 : 0;
//       player0EL.classList.toggle('player-active');
//       player1EL.classList.toggle('player-active');
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     diceEL.classList.add('hidden');
//     document.getElementById(`score-${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       diceEL.classList.add('hidden');
//       document
//         .querySelector(`.player-${activePlayer}`)
//         .classList.add('player-winner');
//       document
//         .querySelector(`.player-${activePlayer}`)
//         .classList.add('player-active');
//     } else {
//       currentScore = 0;
//       document.getElementById(`current-${activePlayer}`).textContent = 0;
//       activePlayer = activePlayer == 0 ? 1 : 0;
//       player0EL.classList.toggle('player-active');
//       player1EL.classList.toggle('player-active');
//     }
//   }
// });

// btnNew.addEventListener('click', function () {
//   // activePlayer = 0;
//   currentScore = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0EL.textContent = 0;
//   current1EL.textContent = 0;

//   diceEL.classList.add('hidden');
//   player0EL.classList.remove('player-winner');
//   player1EL.classList.remove('player-winner');
//   player0EL.classList.add('player-active');
//   player1EL.classList.remove('player-active');
// });
