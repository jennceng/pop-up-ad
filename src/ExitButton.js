import React from 'react';

const ExitButton = props => {
  return (
    <button className="close-button" aria-label="Close alert" type="button" onClick={props.handleExitButton}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </button>
  );
};

export default ExitButton;
