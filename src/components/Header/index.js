import React from 'react';
// import Nav from '../Nav'
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex-row align-center bg-secondary mb-4 py-1  ">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
          {/* <h1><span style={{'letterSpacing': '4px'}} >Huong Kim Tran</span> </h1> */}
          {/* <Nav /> */}

        {/* <nav className="text-center">
          {Auth.loggedIn() ? (
            <React.Fragment>
            <Link to="/">Home</Link>
            <Link to="/catalogs">Catalogs</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/cakeorderform">Order</Link>
            <Link to="/goodbye" onClick={logout}>Logout</Link>
            </React.Fragment>
            ) : (
          
            <React.Fragment>
              <Link to="/">Home</Link>
              <Link to="/catalogs">Catalogs</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/signup">Register</Link>
              <Link to="/login">Login</Link>
            </React.Fragment>
          )}

        </nav> */}
      </div>
    </header>
  );
};


export default Header;
