import React from 'react';
import Circle from 'react-feather/dist/icons/circle';

export const ProgressCircle = React.memo(({ classes, hit, onClick }) => {

  return (
    <button
      className={hit ? classes.progressCircle : classes.unhitProgressCircle}
      style={{ cursor: hit ? 'default' : 'pointer' }}
      onClick={onClick}
    >
      <Circle
        size={20}
        color={hit ? 'limegreen' : 'gainsboro'}
      />
    </button>
  );
});

export default ProgressCircle;
