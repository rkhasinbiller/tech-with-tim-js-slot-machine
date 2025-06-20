// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. Give user their winnings
// 7. Play again

// 1. Deposit money (Function allows us to collect the money.)


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}

const deposit = () => {
  while (true) {
  const depositAmount = prompt("Enter a deposit amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount. Try again.")
    } else {
      return numberDepositAmount;
    }
  } 
}

// 2. Determine number of lines to bet on

const getNumberOfLines = () => {
 while (true) {
  const lines = prompt("Enter the number of lines to bet on (1-3): ");
  const numberOfLines = parseFloat(lines);

    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Try again.")
    } else {
      return numberOfLines;
    }
  } 
}


// 3. Collect bet amount
const getBet = (balance, lines) => {
  while (true) {
  const bet = prompt("Enter the bet per line: ");
  const numberBet = parseFloat(bet);

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid bet. Try again.")
    } else {
      return numberBet;
    }
  } 
}

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    console.log(symbol, count);
      for (let i = 0; i < count; i++) {
        symbols.push(symbol);
      }
  }
  const reels = [[],[],[]];
  for (let i= 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbol = reelSymbols[randomIndex]
      reels[i].push(selectedSymbol);
      reelsSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
}

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);


// 4. Spin the slot machine


// 5. Check if they won