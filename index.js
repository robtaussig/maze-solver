import React, { useMemo } from 'react';
import Boundaries from './components/boundaries';
import Square from './components/square';
import { WALL } from '../../containers/MazeSolverContainer';

export const MazeSolver = React.memo(({ travelledMaze, generatedMaze, onReset, gameCount }) => {

  const squares = useMemo(() => {
    return generatedMaze.reduce((squares, row, rowIdx) => {
      squares = squares.concat(row.map((square, colIdx) => {
        const top = rowIdx > 0 ? generatedMaze[rowIdx - 1][colIdx]: WALL;
        const bottom = rowIdx < generatedMaze.length - 1 ? generatedMaze[rowIdx + 1][colIdx]: WALL;
        const left = colIdx > 0 ? generatedMaze[rowIdx][colIdx - 1]: WALL;
        const right = colIdx < generatedMaze[rowIdx].length - 1 ? generatedMaze[rowIdx][colIdx + 1]: WALL;
        return (
          <Square
            key={`square-${rowIdx}-${colIdx}-${gameCount}`}
            row={rowIdx}
            col={colIdx}
            generatedValue={square}
            travelledValue={travelledMaze[rowIdx] ? travelledMaze[rowIdx][colIdx] : WALL}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            onReset={onReset}
          />
        );
      }));

      return squares;
    }, []);
  }, [travelledMaze, generatedMaze]);

  return (
    <Boundaries maze={generatedMaze}>
      {squares}
    </Boundaries>
  );
});

export default MazeSolver;