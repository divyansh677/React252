import React from 'react';

function ArrayOperation({ numbers }) {
  // Double each number
  const doubledArray = numbers.map(num => num * 2);

  // Get even numbers
  const evenNumbers = numbers.filter(num => num % 2 === 0);

  // Calculate the sum of the array
  const sumOfArray = numbers.reduce((acc, num) => acc + num, 0);

  return (
    <div>
      <h2>Original Array:</h2>
      <p>{JSON.stringify(numbers)}</p>

      <h2>Doubled Array:</h2>
      <p>{JSON.stringify(doubledArray)}</p>

      <h2>Even Numbers:</h2>
      <p>{JSON.stringify(evenNumbers)}</p>

      <h2>Sum of Array:</h2>
      <p>{sumOfArray}</p>
    </div>
  );
}

export default ArrayOperation;