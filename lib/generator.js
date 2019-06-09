import {
  START,
  END,
  PATH,
  WALL,
  TRAVELLED,
} from '../../../containers/MazeSolverContainer';

export default class MazeGenerator {
  constructor(rows, columns) {
    this.numRows = rows;
    this.numColumns = columns;
  }

  build() {
    this._grid = new Array(this.numRows)
      .fill(null).map(() => {
        return new Array(this.numColumns).fill(WALL);
      });

    this._grid[0][0] = START;
    const randomEndRow = Math.floor(Math.random() * (this.numRows - 1)) + 1;
    this._grid[randomEndRow][this.numColumns - 1] = END;
    
    const numBadPaths = Math.floor(((Math.random() * 0.3) + 0.5) * this.numRows);
    this.generateGoodPath([0, 0], [randomEndRow, this.numRows - 1]);
    this.generateBadPaths(numBadPaths);
  }

  generateGoodPath(startPointer, endPointer) {
    let startVisited = {};
    let endVisited = {};
    let hasMet = false;

    visit(startVisited, startPointer);
    visit(endVisited, endPointer);

    let numStartPointerMoves = numMoves(startPointer, startVisited, this.numRows, this.numColumns);
    let numEndPointerMoves = numMoves(endPointer, endVisited, this.numRows, this.numColumns);
    while (hasMet === false && (numStartPointerMoves > 0 || numEndPointerMoves > 0)) {
      if (numStartPointerMoves > 0) {
        startPointer = randomMove(startPointer, startVisited, this.numRows, this.numColumns);
        this.makePath(startPointer);
        visit(startVisited, startPointer);
        numStartPointerMoves = numMoves(startPointer, startVisited, this.numRows, this.numColumns);
      }
      if (numEndPointerMoves > 0) {
        endPointer = randomMove(endPointer, endVisited, this.numRows, this.numColumns);
        this.makePath(endPointer);
        visit(endVisited, endPointer);
        numEndPointerMoves = numMoves(endPointer, endVisited, this.numRows, this.numColumns);
      }

      hasMet = Boolean(checkHasMet(startPointer, endVisited) || checkHasMet(endPointer, startVisited));
    }
    if (hasMet === false) {
      this.forceConnection(startVisited, endVisited);
    }
  }

  makePath([rowPointer, colPointer]) {
    this._grid[rowPointer][colPointer] = PATH;
  }

  forceConnection(startVisited, endVisited) {
    let closestStartPointer = null;
    let closestEndPointer = null;
    let closestDist = Infinity;
    for (let startRow = 0; startRow < this.numRows; startRow++) {
      if (startVisited[startRow]) {
        startVisited[startRow].forEach(startCol => {
          for (let endRow = 0; endRow < this.numRows; endRow++) {
            if (endVisited[endRow]) {
              endVisited[endRow].forEach(endCol => {
                const dist = Math.abs(startCol - endCol) + Math.abs(startRow - endRow);
                if (dist < closestDist) {
                  closestDist = dist;
                  closestStartPointer = [startRow, startCol];
                  closestEndPointer = [endRow, endCol];
                }
              });
            }
          }
        });
      }
    }
    
    this.connect(closestStartPointer, closestEndPointer);
  }

  connect([startRow, startCol], [endRow, endCol]) {
    let row = startRow;
    let col = startCol;
    if (endRow !== row) {
      row = row + ((endRow - row) / Math.abs(endRow - row));
      this.makePath([row, startCol]);
    }
    if (endCol !== col) {
      col = col + ((endCol - col) / Math.abs(endCol - col));
      this.makePath([row, col]);
    }
    while (row !== endRow || col !== endCol) {
      if (endRow !== row) {
        row = row + ((endRow - row) / Math.abs(endRow - row));
        this.makePath([row, col]);
      }
      if (endCol !== col) {
        col = col + ((endCol - col) / Math.abs(endCol - col));
        this.makePath([row, col]);
      }
    }
  }

  generateBadPaths(count) {

  }

  asGrid() {
    return this._grid;
  }
}

const row = pointer => pointer[0];
const col = pointer => pointer[1];

const numMoves = ([rowPointer, colPointer], visited, numRows, numColumns) => {
  const up = [rowPointer - 1, colPointer];
  const left = [rowPointer, colPointer -1];
  const down = [rowPointer + 1, colPointer];
  const right = [rowPointer, colPointer +1];
  let count = 0;
  count += row(up) >= 0 && (!visited[row(up)] || !visited[row(up)].has(col(up))) ? 1 : 0;
  count += row(down) <= numRows - 1 && (!visited[row(down)] || !visited[row(down)].has(col(down))) ? 1 : 0;
  count += col(left) >= 0 && (!visited[row(left)] || !visited[row(left)].has(col(left))) ? 1 : 0;
  count += col(right) <= numColumns - 1 && (!visited[row(right)] || !visited[row(right)].has(col(right))) ? 1 : 0;

  return count;
};

const randomMove = ([rowPointer, colPointer], visited, numRows, numColumns) => {
  const legalMoves = [];

  const up = [rowPointer - 1, colPointer];
  const left = [rowPointer, colPointer -1];
  const down = [rowPointer + 1, colPointer];
  const right = [rowPointer, colPointer +1];

  if (row(up) >= 0 && (!visited[row(up)] || !visited[row(up)].has(col(up)))) {
    legalMoves.push(up);
  }

  if (row(down) <= numRows - 1 && (!visited[row(down)] || !visited[row(down)].has(col(down)))) {
    legalMoves.push(down);
  }

  if (col(left) >= 0 && (!visited[row(left)] || !visited[row(left)].has(col(left)))) {
    legalMoves.push(left);
  }

  if (col(right) <= numColumns - 1 && (!visited[row(right)] || !visited[row(right)].has(col(right)))) {
    legalMoves.push(right);
  }

  const randomIndex = Math.floor(Math.random() * legalMoves.length - 1) + 1;

  return legalMoves[randomIndex];
};

const visit = (visited, [rowPointer, colPointer]) => {
  visited[rowPointer] = visited[rowPointer] || new Set();
  visited[rowPointer].add(colPointer);
};

const checkHasMet = ([rowPointer, colPointer], visited) => {
  return visited[rowPointer] && visited[rowPointer].has(colPointer);
};