import React from 'react';
import error from '../img/error.jpg';

const Error = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Never should have come here!</h1>
      <img
        src={error}
        style={{ width: '100%' }}
        alt="Never should have come here!"
      />
    </div>
  );
};

export default Error;
