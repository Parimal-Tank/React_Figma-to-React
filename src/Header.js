import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return (
     <header>
        <nav className="d-flex justify-content-between nav">
        <div className="d-flex">
            <img src={logo} className="nav-logo" alt="logo" />
            <h2 className="mb-0">ReactFect</h2>
        </div>

        <h3 className="d-flex  nav-p-title mb-0">React Course - Project 1</h3>
        </nav>
     </header>
  );
};

export default Header;