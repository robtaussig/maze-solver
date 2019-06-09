import React, { useMemo } from 'react';

export const RowCoordinate = React.memo(({ value }) => {

  const style = useMemo(() => {

    return {
      position: 'absolute',
      left: 0,
      top: '50%',
      color: '#bada55',
      transform: 'translate(-50%, -50%)',
    };
  }, [value]);

  return (
    <span className={'row-coordinate'} style={style}>{value}</span>
  );
});

export default RowCoordinate;