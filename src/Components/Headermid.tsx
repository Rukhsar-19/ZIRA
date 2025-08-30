import React from "react";
import "../Styles/Headermid.css";
const Headermid = () => {
  return (
    <section className="Headermid">
      <div className="headermidparent">
        <div className="midlinks">
          <ul className="breadcrumb">
            <li>
              <a href="/menu">Главная</a>
            </li>
            <li>
              <a href="/food">Наше меню</a>
            </li>
           
              <li className="orangeLink">
                Алкоgольные напитки
            
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Headermid;
