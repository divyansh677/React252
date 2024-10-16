// import React from 'react';
// import WrestlersGrid from './Component/WrestlersGrid';
// import Employees from './Component/Employees';
// import ObjectInHooks from './Component/ObjectInHooks';
// import Input from './Component/Input';
// import user from './Component/User';
// import Calculator from './Component/Calculator';

// function App() {
//   const wrestlersList = [
//     "John Cena", "The Rock", "Stone Cold", "Undertaker", "Kane", "Triple H"
//   ];

//   return (
//     <div>
//       {/* <Employees/>
//       <WrestlersGrid wrestlers={wrestlersList} /> */}
//       {/* <ObjectInHooks/> */}
//       <Input/>
//       {/* <Calculator/> */}
//       {/* <user/> */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// const App = () => {
//   const cities1 = [
//     { name: "CityA", population: 900000, area: 500, avgTemp: 23 },
//     { name: "CityB", population: 1200000, area: 700, avgTemp: 26 },
//   ];

//   const cities2 = [
//     { name: "CityC", population: 2000000, area: 800, avgTemp: 28 },
//     { name: "CityD", population: 500000, area: 600, avgTemp: 22 },
//   ];

//   const mergedCities = [...cities1, ...cities2];

//   const filteredCities = mergedCities
//     .filter(city => city.population >= 1000000)
//     .map(city => ({ ...city, population: city.population * 1.05 }));

//   const warmCity = filteredCities.find(city => city.avgTemp > 25);

//   const totalArea = filteredCities.reduce((sum, city) => sum + city.area, 0);

//   return (
//     <div>
//       <h1>City Information</h1>
//       <p>First warm city: {warmCity ? warmCity.name : 'None found'}</p>
//       <p>Total Area of filtered cities: {totalArea} km²</p>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import ArrayOperation from './ArrayOperation';

function App() {
  // Array of numbers to pass as a prop
  const numbersArray = [2, 5, 8, 10, 13, 17];

  return (
    <div className="App">
      <h1>Array Operations</h1>
      {/* Pass the array as a prop to ArrayOperation */}
      <ArrayOperation numbers={numbersArray} />
    </div>
  );
}

export default App;