import React from 'react';
import ChevronLeft from 'react-feather/dist/icons/chevron-left';
import ChevronRight from 'react-feather/dist/icons/chevron-right';
import Check from 'react-feather/dist/icons/check';
import NavigationProgress from './navigation-progress';

export const NavigateSlides = React.memo(({
  classes,
  canNavigateLeft,
  canNavigateRight,
  onLeft,
  onRight,
  onClose,
  progressLength,
  progress,
  setProgress,
}) => {

  return (
    <div className={classes.navigateSlides}>
      <button
        className={canNavigateLeft ? classes.enabledNavigationButton : classes.disabledNavigationButton}
        disabled={canNavigateLeft===false}
        onClick={onLeft}
      >
        <ChevronLeft
          size={50}
          color={canNavigateLeft ? 'black' : 'gainsboro'}
        />
      </button>
      <NavigationProgress
        classes={classes}
        progress={progress}
        progressLength={progressLength}
        setProgress={setProgress}
      />
      {canNavigateRight && 
        (<button
          className={classes.enabledNavigationButton}
          onClick={onRight}
        >
          <ChevronRight
            size={50}
            color={canNavigateRight ? 'black' : 'gainsboro'}
          />
        </button>)
      }
      {!canNavigateRight && 
        (<button
          className={classes.enabledNavigationButton}
          onClick={onClose}
        >
          <Check
            size={50}
            color={'limegreen'}
          />
        </button>)
      }
    </div>
  );
});

export default NavigateSlides;
