import React from "react";
import logo from "../Assests/logo.webp";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <section className="Header">
      <div className="header-parent">
        <div className="header-left">
          <img src={logo} width={216} />
        </div>
        <div className="header-right">
          <div className="header-top-links">
            <div className="socialicons-header">
              <div className="header-circle orangecircle">
                <i className="ri-instagram-line"></i>
              </div>
              <div className="header-circle">
                <i className="ri-contrast-line"></i>
              </div>
              <div className="header-circle">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="header-circle">
                <i className="ri-contrast-line"></i>
              </div>
            </div>
            <div className="header-links">
              <ul className="header-alllinks">
                <li>
                  <a href="/">ГЛАВНАЯ</a>
                </li>
                <li>
                  <Link to="/catalog">МЕНЮ</Link>
                </li>
                <li>
                  <Link to="/dishes">О НАС</Link>
                </li>
                <li>
                  <Link to="/product">ГАЛЕРЕЯ</Link>
                </li>
                <li>
                  <Link to="/we">ВАКАНСИИ</Link>
                </li>
                <li>
                  <Link to="/gallery">БЛОГ</Link>
                </li>
                <li>
                  <Link to="/cookies" className="orangeLink">
                    БРОНИРОВАНИЕ
                  </Link>
                </li>
                <li>
                  <Link to="/search">ВХОД / РЕГИСТРАЦИЯ</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* down */}
          <div className="header-inputs">
            <div className="search-container">
              <input type="text" className="search-input" />
              <div className="search-icon">
                <i className="ri-search-line"></i>
              </div>
            </div>
            <div className="header-lasticons">
              <a href="#" className="header-name">
                Корзина
              </a>
              <a href="#" className="cart-no orangeLink">
                00 <i className="ri-shopping-cart-2-fill"></i>
              </a>
              <div className="buttondefault">
                <button className="btn-fire">
                  <i className="ri-fire-line"></i>
                  <p className="btn-text">АКЦИИ</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
