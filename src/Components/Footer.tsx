import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="footer-parent">
        <div className="footer-copy">
          <a href="#">
            Политика конфиденциальности и защита прав. Copyriting 2019 ©
          </a>
        </div>
        <div className="footer-list">
          <ul className="foot-links">
            <li>
              <a href="#" className="orangeLink">
                instagram
              </a>
            </li>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">twitter</a>
            </li>
            <li>
              <a href="#">headhunter</a>
            </li>
            <li>
              <a href="#">youtube</a>
            </li>
            <li>
              <a href="#">связаться с нами</a>
            </li>
          </ul>
        </div>
        <div className="footer-terms">
          <p className="footer-content">Сайт создан digital агентством</p>
          <a href="#"> yuweb.kz</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
