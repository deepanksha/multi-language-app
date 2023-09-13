import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/header.scss";
import imgt from "../img/imgt.png";

const Header = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={imgt} alt="Home" className="logo__img" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">{t("home")}</Link>
        </li>
        <li>
          <Link to="/about">{t("about")}</Link>
        </li>
        <li>
          <Link to="/contact-us">{t("contactUs")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
