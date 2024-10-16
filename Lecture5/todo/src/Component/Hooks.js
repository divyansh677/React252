import React, { useState } from 'react';

export default function Hooks() {
    const [count, setCount] = useState(0);  // Use 'const' instead of 'var' for state variables

    const Increase = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
