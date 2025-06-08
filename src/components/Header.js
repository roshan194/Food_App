import foodFireLogo from "../food_logo.avif"
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
      <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    </a>
  );
  
  const Header = ({searchText, setSearchText, onSearch}) => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    return (
      <>
      <div className="header">
        <Title />
        <div className="search-container">
        <input 
        type="text" 
        className="search-input"
        placeholder="Search a restaurant you want..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}>
        </input>
        <button
        className="search-btn"
        onClick={onSearch}>Search</button>
      </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="./about">About</Link></li>
            <li><Link to="./contact">Contact</Link></li>
            <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isLoggedin ? (
              <button
              className="logout-btn"
              onClick={() => setIsLoggedin(false)}>
              Logout</button>
            ) : (
              <button
              className="login-btn"
              onClick={() => setIsLoggedin(true)}>
              Login</button>
            )}
          </li>
          </ul>
        </div>
      </div>
      </>  
    );
  };

  export default Header;
  