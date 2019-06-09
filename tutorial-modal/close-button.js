import React from 'react';
import X from 'react-feather/dist/icons/x';

export const CloseButton = React.memo(({ classes, onClick, disabled }) => {

  return (
    <button className={classes.closeButton} onClick={onClick} disabled={disabled}>
      <X
        size={16}
        color={'black'}
      />
    </button>
  );
});
export default CloseButton;
