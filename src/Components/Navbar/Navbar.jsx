import React, { useState } from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Main = () => (
  <>
    <p>
      <a href="#/" className="active">
        Home
      </a>
    </p>
    <p>
      <a href="#/">About</a>
    </p>
    <p>
      <a href="#/">Stories</a>
    </p>
    <p>
      <a href="#/">Book</a>
    </p>
    <p>
      <a href="#/">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__links">
            <Main />
          </div>
          <div className="navbar__logo">
            <span>Zu</span>Travels
          </div>
          <div className="navbar__search">
            <p>Search Destination</p>
            <i>
              <BsSearch />
            </i>
          </div>
        </div>
        <div className="navbar__menu">
          {toggle ? (
            <RiCloseLine
              size={30}
              color="black"
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              size={30}
              color="black"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar__menu-container scale-up-center">
              <div className="navbar__menu-container_links">
                <Main />
                <div className="navbar__menu_search">
                  <div className="navbar__search-content">
                    <p>Search Destination</p>
                    <i>
                      <BsSearch />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
