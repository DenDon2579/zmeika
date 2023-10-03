const renderBoard = (board) => {
  flatBoard = board.flat();

  cells = document.querySelectorAll('.cell');

  cells.forEach((el, i) => {
    el.setAttribute(
      'class',
      `cell ${flatBoard[i] >= 1 ? 'snake' : flatBoard[i] === -1 ? 'apple' : ''}`
    );
    el.innerText = flatBoard[i];
  });
};

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

// class Cell{
//   constructor() {
//     this.x =
//   }
// }

class SnakePiece {
  constructor() {
    this.direction = 'r';
    this.length = 1;
    this.x = 1;
    this.y = 3;
    board[this.y][this.x] = 1;
  }
  move() {
    if (board[this.y][this.x] === 4) {
      this.direction = 'd';
    }
    board[this.y][this.x] = 0;

    console.log(this.direction);
    switch (this.direction) {
      case 'u':
        board[this.y - 1][this.x] = 1;
        this.y -= 1;
        break;
      case 'd':
        board[this.y + 1][this.x] = board[this.y + 1][this.x] === 4 ? 4 : 1;
        console.log(board[this.y + 1][this.x]);
        this.y += 1;
        break;
      case 'r':
        if (!(board[this.y][this.x + 1] > 1)) {
          board[this.y][this.x + 1] = 1;
        }
        this.x += 1;
        break;
      case 'l':
        board[this.y][this.x - 1] = 1;
        this.x -= 1;
        break;
    }
  }
}

class SnakeHead {
  constructor() {
    this.direction = 'r';
    this.length = 1;
    this.x = 2;
    this.y = 3;
    board[this.y][this.x] = 1;
  }
  move() {
    // console.log(this.x, this.y);
    // ![3, 4, 5, 6].includes(board[this.y][this.x])
    //   ? (board[this.y][this.x] = 0)
    //   : '';
    switch (this.direction) {
      case 'u':
        board[this.y - 1][this.x] = 1;
        this.y -= 1;
        break;
      case 'd':
        board[this.y + 1][this.x] = 1;
        this.y += 1;
        break;
      case 'r':
        board[this.y][this.x + 1] = 1;
        this.x += 1;
        break;
      case 'l':
        board[this.y][this.x - 1] = 1;
        this.x -= 1;
        break;
    }
  }
  setDirection(direction) {
    if (
      !(
        (this.direction === 'u' && direction === 'd') ||
        (this.direction === 'd' && direction === 'u') ||
        (this.direction === 'r' && direction === 'l') ||
        (this.direction === 'l' && direction === 'r') ||
        this.direction === direction
      )
    ) {
      this.direction = direction;
      switch (direction) {
        case 'u':
          board[this.y][this.x] = 3;
          break;
        case 'd':
          board[this.y][this.x] = 4;
          break;
        case 'r':
          board[this.y][this.x] = 5;
          break;
        case 'l':
          board[this.y][this.x] = 6;
          break;
      }
      board[this.y][this.x];
    }
  }
}

const snake = new SnakeHead();
const cell = new SnakePiece();
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      snake.setDirection('u');
      break;
    case 'ArrowDown':
      snake.setDirection('d');
      break;
    case 'ArrowRight':
      snake.setDirection('r');
      break;
    case 'ArrowLeft':
      snake.setDirection('l');
      break;
  }
});

setInterval(() => {
  snake.move();
  cell.move();
}, 200);
setInterval(() => renderBoard(board), 50);
