import React, { useMemo } from 'react';

export const Boundaries = React.memo(({ maze, children }) => {

  const style = useMemo(() => {
    const minSideLength = Math.floor(Math.min(window.innerHeight, window.innerWidth) * 0.95);
    const numSquares = maze[0].length;
    const afterRemainder = minSideLength - (minSideLength % numSquares);
    const divisor = afterRemainder / numSquares;
    const afterGrid = ((divisor - (divisor % 9)) * numSquares) + numSquares - 1;
    const dimension = `${afterGrid}px`;
    return {
      display: 'grid',
      height: dimension,
      width: dimension,
      minHeight: dimension,
      minWidth: dimension,
      gridTemplateColumns: `repeat(${maze[0].length}, 1fr)`,
      gridTemplateRows: `repeat(${maze.length}, 1fr)`,
      backgroundColor: '#bada55',
      gridGap: '1px',
    };
  }, [maze]);

  return (
    <div id={'boundaries'} style={style}>
      {children}
    </div>
  );
});

export default Boundaries;