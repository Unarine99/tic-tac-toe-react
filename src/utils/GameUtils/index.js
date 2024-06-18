const checkForSequence = (option1, option2, option3) => {
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  // ROWS
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("row winner");
      return true;
    }
  }

  // COLUMNS
  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("column winner");
      return true;
    }
  }

  // diagonal 1
  if (board[0] === board[4] && board[4] === board[8]) {
    console.log("Diagonal WINNER");
    return true;
  }
  // diagonal 2
  if (board[2] === board[4] && board[4] === board[6]) {
    console.log("Diagonal WINNER");
    return true;
  }
};

// rows
// if (board[0]===board[1] && board[1]===board[2]) {
//     console.log("WINNER")
//     return true
// }
// if (board[3]===board[4] && board[4]===board[5]) {
//     console.log("WINNER")
//     return true
// }
// if (board[6]===board[7] && board[7]===board[8]) {
//     console.log("WINNER")
//     return true
// }

// columns
//   if (board[0] === board[2] && board[2] === board[6]) {
//     console.log("WINNER");
//     return true;
//   }
//   if (board[1] === board[4] && board[4] === board[7]) {
//     console.log("WINNER");
//     return true;
//   }
//   if (board[2] === board[5] && board[5] === board[8]) {
//     console.log("WINNER");
//     return true;
//   }
// };
