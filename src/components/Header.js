import foodFireLogo from "../food_logo.avif";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../hooks/useOnline"; 

const Title = () => (
  <a href="/">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
  </a>
);

const Header = ({ searchText, setSearchText, onSearch }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const isOnline = useOnline(); // ✅ Use the hook

  return (
    <div className="header">
      <Title />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={onSearch}>
          Search
        </button>
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
            {/* ✅ Online/Offline Status */}
            <span style={{ color: isOnline ? "green" : "red" }}>
              {isOnline ? "🟢 Online" : "🔴 Offline"}
            </span>
          </li>
          <li>
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
