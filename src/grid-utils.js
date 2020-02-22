const NUM_ROWS = 100;
const NUM_COLS = 100;

const neighborRules = [
  [-1, 0],
  [1, 0],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [0, -1],
  [0, 1]
];

// Generate a 2d array of randomized cells
export const generateNewCells = () => {
  const grid = [];

  for (let i = 0; i < NUM_ROWS; i++) {
    grid[i] = [];
    for (let j = 0; j < NUM_COLS; j++) {
      grid[i][j] = Math.random() > 0.3;
    }
  }

  return grid;
};

export const generateNextCells = oldCells => {
  const newCells = [...oldCells];

  for (let i = 0; i < oldCells.length; i++) {
    for (let j = 0; j < oldCells[i].length; j++) {
      let neighbors = 0;

      neighborRules.forEach(rule => {
        const newI = i + rule[0];
        const newJ = j + rule[1];

        if (newI >= 0 && newI < oldCells.length && newJ >= 0 && newJ < oldCells[i].length) {
          neighbors += oldCells[newI][newJ] ? 1 : 0;
        }
      });

      // Overpopulation and underpopulation causes death
      if (neighbors > 3 || neighbors < 2) {
        newCells[i][j] = false;
      }

      // Dead and has 3 neighbors causes life
      if (!oldCells[i][j] && neighbors === 3) {
        newCells[i][j] = true;
      }
    }
  }

  return newCells;
};
