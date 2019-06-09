import React from 'react';

export const TutorialTitle = React.memo(({ classes }) => {

  return (
    <h1 className={classes.tutorialTitle}>
      How to Use
    </h1>
  );
});

export default TutorialTitle;
