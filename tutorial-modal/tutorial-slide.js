import React from 'react';

export const TutorialSlide = React.memo(({ classes, picture, text }) => {

  return (
    <div className={classes.tutorialSlide}>
      <img className={classes.slideImage} src={picture}/>
      <span className={classes.slideText}>{text}</span>
    </div>
  );
});

export default TutorialSlide;
