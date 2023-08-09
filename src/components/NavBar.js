import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import mommyshutimg from '../image.png';



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    
      <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
           <div className="mommyslogo"><img className="logo" src={mommyshutimg} alt="Mommy's Hut"></img><b> Mommy's Hut </b></div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Vegrecipes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              > 
                Veg Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Chickenrecipes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Chicken Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Seafood"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SeaFood / Mutton Recipes
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
