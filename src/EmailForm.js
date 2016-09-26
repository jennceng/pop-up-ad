import React from 'react';

const EmailForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="row column">
        <div className="large-9 columns email-container">
          <input type="text" placeholder="Your email here" />
        </div>
        <div className="large-3 columns submit-container">
          <input type="submit" value="CLAIM YOUR PRIZE" />
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
