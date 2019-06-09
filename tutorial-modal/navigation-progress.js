import React, { useState } from 'react';
import ProgressCircle from './progress-circle';

export const NavigationProgress = React.memo(({ classes, progress, progressLength, setProgress }) => {

  return (
    <React.Fragment>
      {new Array(progressLength).fill(null).map((_, idx) => {
        return (
          <ProgressCircle
            classes={classes}
            key={`${idx}-progress-circle`}
            hit={progress >= idx}
            onClick={()=> setProgress(idx)}
          />
        );
      })}
    </React.Fragment>
  );
});

export default NavigationProgress;