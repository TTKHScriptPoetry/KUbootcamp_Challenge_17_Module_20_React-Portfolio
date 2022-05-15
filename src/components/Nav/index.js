import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

  const  categories = [
    { name: 'porfolio', description: 'KU Bootcamp challenges and group projects' },
    { name: 'adventure', description: 'Photos taken while traveling' },
  ];

  const handleClick = (item) => {
    //console.log(item);
    alert(item);
    return item;
  };

  return (
    <header>
       <h1>
         Kimberly Tran
      </h1>
      <nav>
        <ul >
          <li>
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About Me
            </a>
          </li>
           
          <li className="navActive">
            <a data-testid="contact" href="#contact" onClick={() => handleClick('Resume')}>
              Contact
            </a>
          </li>
          <li>
            <a data-testid="resume" href="#resume" onClick={() => handleClick('Resume')}>
              Resume
            </a>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(category.name); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;