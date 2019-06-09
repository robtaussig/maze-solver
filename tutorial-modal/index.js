import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import Modal from '@material-ui/core/Modal';
import CloseButton from './close-button';
import TutorialTitle from './tutorial-title';
import TutorialSlides from './tutorial-slides';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = Boolean(md.mobile());

export const TutorialModal = React.memo(({ classes, open, onClose }) => {

  const content = isMobile ? (
    <div className={classes.root}>
      <CloseButton classes={classes} onClick={onClose} disabled={false}/>
      <span style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        margin: '0 15px',
        fontWeight: 600,
      }}>
        This project was designed as an interactive experience that depends on using developer tools, provided by most desktop-based browsers. If you are visiting this from a mobile device (which hopefully is the case since this message should not be displayed from a desktop browser), you will only be able to interact with the maze by clicking on blocks. Because the mazes are designed to be solved programatically, they will likely be trivially easy to solve manually. Either way, please enjoy.
      </span>
    </div>
  ) : (
    <div className={classes.root}>
      <CloseButton classes={classes} onClick={onClose} disabled={false}/>
      <TutorialTitle classes={classes}/>
      <TutorialSlides classes={classes} onClose={onClose}/>
    </div>
  );
  return (
    <Modal
      open={open}
      onClose={onClose}
      label={'Maze Solver Tutorial'}
    >
      {content}
    </Modal>
  );
});

export default withStyles(styles)(TutorialModal);
