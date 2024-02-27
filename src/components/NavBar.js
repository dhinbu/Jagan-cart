import React from "react";
import classes from "./navBar.module.css";
import { BiSolidHome } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();

  return (
    <nav className={classes.main}>
      {location.pathname.length > 1 ? (
        <div className={classes.movieDetail}>
          <p>Item Details</p>
        </div>
      ) : (
        <form>
          <input
            id="search"
            className={classes.input}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </form>
      )}
      <Link className={classes.home} aria-label="Home" to="/">
        <BiSolidHome style={{ width: "20px", height: "20px" }} />
      </Link>
    </nav>
  );
};

export default NavBar;
