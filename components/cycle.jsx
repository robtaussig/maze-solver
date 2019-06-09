import React, { useEffect } from 'react';

export const Cycle = React.memo(({ onReset }) => {

  useEffect(() => {
    
  }, []);

  return (<div className={'cycle'} style={{ backgroundColor: 'blue' }} onClick={onReset} />);
});

export default Cycle;
