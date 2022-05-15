import React, { useState } from 'react';
import Nav from './components/Nav/';
import About from './components/About';
import Portfolio from './components/Portfolio';

// function App() {
// 
//   return (
//     <div>
//       <Nav></Nav>
//       <main>
//         <Portfolio></Portfolio>
//         <About></About>
//       </main>
//     </div>
//   );
// }

function App() {
  const [categories] = useState([
    { name: 'portfolio', description: 'KU Bootcamp challenges and group projects' },
    // { name: 'adventure', description: 'Photos taken while traveling' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio currentCategory={currentCategory}></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;

 