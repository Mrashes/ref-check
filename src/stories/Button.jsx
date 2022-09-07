import React, {forwardRef, useState} from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef((props, ref) => {
    const [butt, setButt] = useState(1);
  
    return (
      <button
        onClick={() => setButt((butt) => (butt += 1))}
        ref={ref}
        className="FancyButton"
      >
        {butt}
      </button>
    );
  });
