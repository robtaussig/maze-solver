export const styles = theme => ({
  root: {
    width: '600px',
    maxWidth: '80vw',
    left: '50%',
    top: '50%',
    height: '600px',
    maxHeight: '80vh',
    backgroundColor: 'white',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    border: '5px solid #b0b896',
    display: 'flex',
    flexDirection: 'column',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  tutorialTitle: {
    fontSize: 20,
    margin: 10,
    fontWeight: 600,
  },
  tutorialSlidesWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tutorialSlide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 7px -4px black',
    backgroundColor: '#bada553b',
  },
  navigateSlides: {
    flex: '0 0 100px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& > button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  slideImage: {
    flex: '0 0 300px',
    height: 300,
    boxShadow: '0px 0px 4px -2px black',
    backgroundColor: 'white',
    width: 'auto',
    objectFit: 'contain',
  },
  slideText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    margin: '0 15px',
  },
  enabledNavigationButton: {
    cursor: 'pointer',
  },
  disabledNavigationButton: {

  },
  progressCircle: {

  },
  unhitProgressCircle: {

  },
});
