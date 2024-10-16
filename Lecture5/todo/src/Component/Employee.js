import React from 'react';
import WrestlersGrid from './WrestlersGrid';

function App() {
  const wrestlersList = [
    "John Cena", "The Rock", "Stone Cold", "Undertaker", "Kane", "Triple H"
  ];

  return (
    <div>
      <WrestlersGrid wrestlers={wrestlersList} />
    </div>
  );
}

export default App;
