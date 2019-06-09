import React, { useMemo } from 'react';

export const ColCoordinate = React.memo(({ value }) => {

  const style = useMemo(() => {

    return {
      position: 'absolute',
      left: '50%',
      top: 0,
      color: '#bada55',
      transform: 'translate(-50%, -50%)',
    };
  }, [value]);

  return (
    <span className={'col-coordinate'} style={style}>{value}</span>
  );
});

export default ColCoordinate;