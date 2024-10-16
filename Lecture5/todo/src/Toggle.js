import React, { useState } from 'react';

export default function Toggle() {
  const [Toggle, setToggle] = useState("ON");

  const toggle1 = () => {
    if (Toggle === "ON") {
      setToggle("OFF");
    } else {
      setToggle("ON");
    }
  };

  return (
    <div style={{ backgroundColor: Toggle === "ON" ? "yellow" : "red", padding: '20px' }}>
      <button className='btn' onClick={toggle1}>
        {Toggle}
      </button>
      {
        Toggle ==="OFF" && (<p>
            Toggle is off
        </p>)
      }

      {/* Optional content to display when the toggle is "ON" */}
      {Toggle === "ON" && (
        <p>The background is yellow because the toggle is ON!</p>
      )}
    </div>
  );
}
