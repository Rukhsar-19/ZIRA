import React from "react";
// import "../Styles/Filters.css";
// import Dropdown from "react-bootstrap/Dropdown";
import { Dropdown } from "react-bootstrap";

const Filters = () => {
  // dropdown
  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    e.currentTarget.parentElement?.classList.add("open");
  };
  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    e.currentTarget.parentElement?.classList.remove("open");
  };

  return (
    <section className="Filters">
      <div className="filtersparent">
        <div className="dropdownfilter">
          <div className="dropdown-inline ">
            <span className="sort-text">Сорт:</span>
            <div className="custom-select-wrapper">
              <select
                className="dropdown-select"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="white">Белое вино</option>
                <option value="red">Красное вино</option>
                <option value="rose">Розовое вино</option>
              </select>
            </div>
          </div>
          <div className="dropdown-inline ">
            <span className="sort-text">Сорт:</span>
            <div className="custom-select-wrapper">
              <select
                className="dropdown-select"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="white">Белое вино</option>
                <option value="red">Красное вино</option>
                <option value="rose">Розовое вино</option>
              </select>
            </div>
          </div>
        </div>
        <div className="viewsimage">
          <i className="ri-layout-grid-fill"></i>
          <i className="ri-layout-grid-fill  chnageview"></i>
        </div>
      </div>
    </section>
  );
};

export default Filters;
