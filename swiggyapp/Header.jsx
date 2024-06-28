import { URL_LOGO } from "../assets/constants";

const Header = () => {
    return (
      <div className="res-header">
        <div className="res-logo">
          <img
            src= {URL_LOGO}
            alt="res-logo"
            className="res-logo-img"
          />
        </div>
  
        <div className="res-navbar">
          <ul className="res-navlist">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;