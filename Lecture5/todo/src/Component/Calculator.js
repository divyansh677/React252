import React, { useState } from 'react';


export default function Calculator() {
  const [input, setInput] = useState(''); // To store user input
  const [result, setResult] = useState(''); // To store the calculation result

  // Handles button clicks
  const handleClick = (value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else {
      setInput(input + value);
    }
  };

  // Performs the calculation
  const calculate = () => {
    try {
      // Evaluate the input using JS eval (be careful with real-world usage due to security risks)
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  // Clears the input and result
  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}
