import React, { useEffect } from 'react';

export const IllegalMove = React.memo(({ onReset }) => {

  useEffect(() => {
    
  }, []);

  return (<div className={'illegal-move'} style={{ backgroundColor: 'red' }} onClick={onReset} />);
});

export default IllegalMove;
