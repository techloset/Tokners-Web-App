import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/images/logo.png";
import Button from "../button/Button";
export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg p-md-5 navbar-dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="LOGO" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/our-team">
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tokens">
                  Tokners
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/connect-wallet">
                  Connect wallet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light-paper">
                  Lightpaper
                </Link>
              </li>
            </ul>
            <div>
             <Button name="Sign In"/>
             <Button name="Sign Up"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
