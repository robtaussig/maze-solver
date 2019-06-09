import React, { useMemo, useContext } from 'react';
import { MazeContext } from '../../../containers/MazeSolverContainer';
import Corner from './corner';
import Path from './path';
import Wall from './wall';
import Crash from './crash';
import Cycle from './cycle';
import IllegalMove from './illegal-move';
import RowCoordinate from './row-coordinate';
import ColCoordinate from './col-coordinate';
import {
  START,
  END,
  PATH,
  WALL,
  TRAVELLED,
  CRASH,
  CYCLE,
  ILLEGAL_MOVE,
} from '../../../containers/MazeSolverContainer';

export const Square = React.memo(({ generatedValue, travelledValue, top, bottom, left, right, row, col, onReset }) => {
  const dispatch = useContext(MazeContext);

  const style = useMemo(() => {
    return {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      position: 'relative',
      backgroundColor: 'black',
    };
  }, [generatedValue, travelledValue]);

  const isWall = generatedValue === WALL;

  const leftSide = useMemo(() => {
    if (isWall) {
      return (<Wall hit={travelledValue !== WALL}/>);
    } else {
      return (<Path visited={travelledValue === TRAVELLED} left={left} right={PATH}/>);
    }
  }, [generatedValue, travelledValue, left]);

  const topSide = useMemo(() => {
    if (isWall) {
      return (<Wall hit={travelledValue !== WALL}/>);
    } else {
      return (<Path visited={travelledValue === TRAVELLED} top={top} bottom={PATH}/>);
    }
  }, [generatedValue, travelledValue, top]);

  const rightSide = useMemo(() => {
    if (isWall) {
      return (<Wall hit={travelledValue !== WALL}/>);
    } else {
      return (<Path visited={travelledValue === TRAVELLED} right={right} left={PATH}/>);
    }
  }, [generatedValue, travelledValue, right]);

  const bottomSide = useMemo(() => {
    if (isWall) {
      return (<Wall hit={travelledValue !== WALL}/>);
    } else {
      return (<Path visited={travelledValue === TRAVELLED} bottom={bottom} top={PATH}/>);
    }
  }, [generatedValue, travelledValue, bottom]);

  const middle = useMemo(() => {
    if (isWall) {
      return (<Wall hit={travelledValue !== WALL}/>);
    } else {
      return (<Path isStart={generatedValue === START} isEnd={generatedValue === END} visited={travelledValue === TRAVELLED} left={left} top={top} right={right} bottom={bottom}/>);
    }
  }, [generatedValue, travelledValue, top, bottom, left, right]);

  const corner = useMemo(() => {
    return (
      <Corner/>
    );
  }, []);

  const coordinate = useMemo(() => {
    if (row === 0 && col === 0) {
      return (
        <React.Fragment>
          <RowCoordinate value={row}/>
          <ColCoordinate value={col}/>
        </React.Fragment>
      );
    } else if (col === 0) {
      return (
        <RowCoordinate value={row}/>
      );
    } else if (row === 0) {
      return (
        <ColCoordinate value={col}/>
      );
    }
  }, [row, col]);

  if (travelledValue === CRASH) return (<Crash onReset={onReset}/>);
  if (travelledValue === CYCLE) return (<Cycle onReset={onReset}/>);
  if (travelledValue === ILLEGAL_MOVE) return (<IllegalMove onReset={onReset}/>);

  return (
    <div className={'maze-square'} style={style} onClick={() => dispatch({ type: 'STEP', payload: [row, col] })}>
      {coordinate}
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

export default Square;