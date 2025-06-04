import foodFireLogo from "../food_logo.avif"

const Title = () => (
    <a href="/">
      <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    </a>
  );
  
  const Header = ({searchText, setSearchText, onSearch}) => {
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      </>  
    );
  };

  export default Header;
  