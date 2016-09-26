import React from 'react';
import EmailForm from './EmailForm';
import ExitButton from './ExitButton'

const App = () => {
  
  let handleFormSubmit = event => {
    event.preventDefault();
  };

  let handleExitButton = event => {
    let box = () => {
      confirm('Are you sure?');
    }
    box();
    while(box) {
      box();
    }
  };

  return (
    <div className = "row column">
      <div className="callout small">
        <ExitButton handleExitButton={handleExitButton} />
        <h2 className="text-center">You have won tickets to see Taylor Swift!!</h2>
        <h5 className="text-center">Please enter your email so we can send you the tickets</h5>
        <EmailForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default App;
