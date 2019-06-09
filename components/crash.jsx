import React, { useEffect } from 'react';

export const Crash = React.memo(({ onReset }) => {

  useEffect(() => {
    
  }, []);

  return (<div className={'crash'} style={{ backgroundColor: 'orange' }} onClick={onReset}/>);
});

export default Crash;
