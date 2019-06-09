import React from 'react';
import HelpCircle from 'react-feather/dist/icons/help-circle';

export const OpenTutorialButton = React.memo(({ onClick }) => {

  return (
    <button
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 30,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <HelpCircle
        size={20}
        color={'#bada55'}
      />
    </button>
  );
});

export default OpenTutorialButton;