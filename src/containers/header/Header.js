import React from "react";

import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";

import { Link } from "components";

import Logo from "assets/trackfarm_logo.png";

import "./Header.scss";

const Header = ({ isMobile, isOpen, onClickMenu }) => {
  return (
    <div className="header-layout">
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            <Link to="/">
              <img alt="logo" src={Logo} />
            </Link>
          </div>
          <div className="header-pagelist">
            {isMobile ? (
              <button
                className="menu-button"
                type="button"
                onClick={onClickMenu}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            ) : (
              <>
                <Link to="/">HOME</Link>
                <Link to="/company">COMPANY</Link>
                <Link to="/project">PRODUCTS</Link>
                <Link to="/notice">NEWS</Link>
              </>
            )}
          </div>
          {isMobile ? null : (
            <button className="contact-button font-text-md">CONTACT</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
