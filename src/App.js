import React, { useState } from 'react';
import Nav from './components/Nav/';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact'; 

function App() {
  const [categories] = useState([
    { name: 'portfolio', description: 'KU Bootcamp challenges and group projects' },
    // { name: 'adventure', description: 'Photos taken while traveling' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}

        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
            <>
              <Portfolio currentCategory={currentCategory}></Portfolio>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

 