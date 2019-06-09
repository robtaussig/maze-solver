import React, { useState } from 'react';
import TutorialSlide from './tutorial-slide';
import NavigateSlides from './navigate-slides';

const SLIDES = [
  {
    picture: '/static/maze-solver-console.png',
    text: 'Open dev tools (\'⌘ + shift + i\' on macOS and \'ctrl + shift + i\' on Windows) and navigate to console.',
  },
  {
    picture: '/static/maze-solver-start.png',
    text: 'Enter the following code and hit \'Enter\': const [ startGame, setSolver, randomizeMaze ] = useMazeSolver()',
  },
  {
    picture: '/static/maze-solver-example.png',
    text: 'Write a function that takes a maze as a parameter and returns an array of moves.',
  },
  {
    picture: '/static/maze-solver-structure.png',
    text: 'You can inspect what the maze structure looks like in dev tools.',
  },
  {
    picture: '/static/maze-solver-process.png',
    text: 'Pass your maze solving function (without invoking) as an argument into setSolver. Invoke startGame to see your solution in action.',
  },
  {
    picture: '/static/maze-solver-half-solution.png',
    text: 'The above solution was hard-coded to move one block to the right. You can also click on blocks to make moves manually.',
  },
  {
    picture: '/static/maze-solver-illegal.png',
    text: 'Illegal moves will result in a red square.',
  },
  {
    picture: '/static/maze-solver-collision.png',
    text: 'Colliding with a wall will result in an orange square.',
  },
  {
    picture: '/static/maze-solver-solution.png',
    text: 'Upon solving a puzzle, your function will be put through more puzzles to ensure you didn\'t just hard-code the moves!',
  },
];

export const TutorialSlides = React.memo(({ classes, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = SLIDES[currentSlide];

  const handleLeft = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const handleRight = () => {
    setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
  };

  return (
    <div className={classes.tutorialSlidesWrapper}>
      <TutorialSlide
        classes={classes}
        picture={slide.picture}
        text={slide.text}
      />
      <NavigateSlides
        classes={classes}
        canNavigateLeft={currentSlide > 0}
        canNavigateRight={currentSlide < SLIDES.length - 1}
        onLeft={handleLeft}
        onRight={handleRight}
        onClose={onClose}
        progressLength={SLIDES.length}
        progress={currentSlide}
        setProgress={setCurrentSlide}
      />
    </div>
  );
});
export default TutorialSlides;