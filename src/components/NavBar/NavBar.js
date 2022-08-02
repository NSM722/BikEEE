// This container renders the Navbar and site Header/or company Name

import React from 'react';

const NavBar  = () => {
  return (
    <>
      {/** NavBar as a heading */}
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-white fs-1 fw-bold">BikEEE</span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;