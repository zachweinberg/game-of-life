export const ROW_SIZE = 100;

// Generate a 2d array of randomized cells
export const generateNewCells = () => {
  const grid = new Array(ROW_SIZE);

  for (let i = 0; i < ROW_SIZE; i++) {
    grid[i] = new Array(ROW_SIZE);
    for (let j = 0; j < grid.length; j++) {
      grid[i][j] = Math.random() > 0.7;
    }
  }
  return grid;
};

// Count the 8 neighbors surrounding a single cell
const countNeighbors = (grid, x, y) => {
  let sum = 0;

  const numberOfRows = grid.length;
  const numberOfCols = grid[0].length;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const row = (x + i + numberOfRows) % numberOfRows;
      const col = (y + j + numberOfCols) % numberOfCols;
      if (grid[row][col]) {
        sum++;
      }
    }
  }

  if (grid[x][y]) {
    sum--;
  }

  return sum;
};

// Generate a new copy of cells based on Game of Life rules
export const generateNextGenCells = cells => {
  // .....@SPREAD
  const nextCells = new Array(cells.length);

  for (let i = 0; i < cells.length; i++) {
    nextCells[i] = new Array(cells.length);

    for (let j = 0; j < nextCells[i].length; j++) {
      const value = cells[i][j];

      const neighbors = countNeighbors(cells, i, j);

      if (!value && neighbors === 3) {
        nextCells[i][j] = true;
      } else if (value && (neighbors < 2 || neighbors > 3)) {
        nextCells[i][j] = false;
      } else {
        nextCells[i][j] = value;
      }
    }
  }
  return nextCells;
};
