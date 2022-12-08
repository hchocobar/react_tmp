import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
	return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={props.logoHref}>
            <img src={props.logoURL} alt={props.logoAlt} width="35" height="35" className="d-inline-block align-text-top"/>
            <span className="p-2">{props.logoTitle}</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* para alinear el menú a la derecha se agrega 'justify-content-end' en el div, y se elimina 'me-auto' en la ul*/}
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={props.item1URL}>{props.item1Text}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.item2URL}>{props.item2Text}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.item3URL}>{props.item3Text}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
	);
};

Navbar.propTypes = {
  logoHref: PropTypes.string, 
  logoURL: PropTypes.string,
  logAlt: PropTypes.string,
  logoTitle: PropTypes.string,
  item1URL: PropTypes.string,
  item1Text: PropTypes.string,
  item2URL: PropTypes.string,
  item2Text: PropTypes.string,
  item3URL: PropTypes.string,
  item3Text: PropTypes.string,
};

Navbar.defaultProps = {
  logoHref: "https://chocobar.net/",
  logoURL: "https://chocobar.net/hcht",
  logAlt: "Hector Chocobar-Torrejon",
  logoTitle: "Hector Chocobar-Torrejon",
  item1URL: "#",
  item1Text: "Home",
  item2URL: "#",
  item2Text: "Link",
  item3URL: "#",
  item3Text: "Blog",
};

export default Navbar;