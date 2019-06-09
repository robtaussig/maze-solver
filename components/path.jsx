import React, { useMemo } from 'react';
import Corner from './corner';
import Wall from './wall';
import PathTile from './path-tile';
import {
  START,
  END,
  PATH,
  WALL,
  TRAVELLED,
} from '../../../containers/MazeSolverContainer';

export const Path = React.memo(({ top, bottom, left, right, isStart, isEnd, visited }) => {
  const style = useMemo(() => {

    return {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      backgroundColor: isStart ? 'limegreen' : isEnd ? 'red' : 'black',
      borderRadius: '50%',
    };
  }, [isStart, isEnd, visited]);

  const isConnected = useMemo(() => {
    if (isStart || isEnd) return true;

    let points = 0;
    const calculatePoints = val => {
      switch (val) {
        case START:
          return 2;
        case END:
          return 2;
        case PATH:
          return 1;
        case TRAVELLED:
          return 1;
      
        default:
          return 0;
      }
    };
    
    points += calculatePoints(top);
    points += calculatePoints(left);
    points += calculatePoints(right);
    points += calculatePoints(bottom);

    return points > 1;
  }, [top, bottom, left, right]);

  const leftSide = useMemo(() => {
    if (left === undefined || left === WALL || !isConnected) {
      return (<Wall/>);
    }
    return (
      <PathTile visited={visited} value={left}/>
    );
  }, [visited, left]);

  const topSide = useMemo(() => {
    if (top === undefined || top === WALL || !isConnected) {
      return (<Wall/>);
    }
    return (
      <PathTile visited={visited} value={top}/>
    );
  }, [visited, top]);

  const rightSide = useMemo(() => {
    if (right === undefined || right === WALL || !isConnected) {
      return (<Wall/>);
    }
    return (
      <PathTile visited={visited} value={right}/>
    );
  }, [visited, right]);

  const bottomSide = useMemo(() => {
    if (bottom === undefined || bottom === WALL || !isConnected) {
      return (<Wall/>);
    }
    return (
      <PathTile visited={visited} value={bottom}/>
    );
  }, [visited, bottom]);

  const middle = useMemo(() => {
    if (!isConnected) return (<Wall/>);

    if ([top, bottom, left, right].some(dir => dir === PATH)) {
      return (
        <PathTile visited={visited} value={PATH} isStart={isStart} isEnd={isEnd}/>
      );
    } else {
      return (
        <Wall/>
      );
    }
  }, [visited, top, bottom, left, right]);

  const corner = useMemo(() => {
    return (
      <Corner/>
    );
  }, []);

  return (
    <div className={'path'} style={style}>
      {corner}
      {topSide}
      {corner}
      {leftSide}
      {middle}
      {rightSide}
      {corner}
      {bottomSide}
      {corner}
    </div>
  );
});

export default Path;