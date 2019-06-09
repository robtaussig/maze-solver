import React, { useMemo } from 'react';
import { WALL } from '../../../containers/MazeSolverContainer';

export const PathTile = React.memo(({ value, isStart, isEnd, visited }) => {

  const style = useMemo(() => {
    if (isStart) {
      return {
        backgroundColor: 'limegreen',
      };
    } else if (isEnd) {
      return {
        backgroundColor: 'red',
      };
    } else if (visited) {
      return {
        backgroundColor: 'limegreen',
      };
    } else if (value === WALL || value === null || value === undefined) {
      return {
        backgroundColor: 'black',
      };
    } else {
      return {
        backgroundColor: 'white',
      };
    }
  }, [value, isStart, isEnd, visited]);

  return (
    <div className={'path-tile'} style={style}/>
  );
});

export default PathTile;