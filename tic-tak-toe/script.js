let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function placeMarker(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    checkWinner();
    togglePlayer();
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
      return;
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    document.getElementById('result').innerText = "It's a tie!";
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('result').innerText = '';
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
}
