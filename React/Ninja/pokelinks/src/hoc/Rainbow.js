import React from 'react';

function Rainbow(WrappedComponent) {
  // We need to handle props as we have to pass it down to our wrapped component
  return props => {
    return (
      <div className="red-text">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default Rainbow;
