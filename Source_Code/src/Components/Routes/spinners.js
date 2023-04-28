import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';
const Spinner = () => {
  const style = { textAlign: 'center' };
  return (
    <div style={style}>
      <SpinnerCircular
        size={50}
        thickness={93}
        speed={100}
        color="rgba(54, 215, 183, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
        style={{height:"70vh"}}
      />
    </div>
  );
};

export default Spinner;
