import React from "react";
import Headermid from "./Headermid";
import "../Styles/Gallery.css";
import gallery1 from "../Assests/gallery1.webp";
import gallery2 from "../Assests/gallery2.webp";
import gallery3 from "../Assests/gallery3.webp";
import gallery4 from "../Assests/gallery4.webp";
import gallery5 from "../Assests/gallery5.webp";
import gallery6 from "../Assests/gallery6.webp";
import gallery7 from "../Assests/gallery7.webp";
import gallery8 from "../Assests/gallery8.webp";
import gallery9 from "../Assests/gallery9.webp";
import gallery10 from "../Assests/gallery10.webp";
import gallery11 from "../Assests/gallery11.webp";
import gallery12 from "../Assests/gallery12.webp";
import crop from "../Assests/crop.webp";
const Gallery = () => {
  return (
    <>
      <Headermid />
      <section className="topsection"></section>
      <section className="Gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="leftmenu">
                <div className="sidebar">
                  <h2 className="gallery-left-head">Категории</h2>
                  <div className="menu-item">
                    <ul className="submenu open">
                      <li className="active">
                        <a href="#" className="menu-label menu-gap">
                          Все фото
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          DJEDDIE
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Новый год 2018
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Zira ресторан
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Название папки
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Название папки
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Название папки
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Название папки
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Название папки
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu-label menu-gap">
                          Название папки
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <img src={gallery1} className="gallery-pic1" />
                    <div className="gallery-picdec">
                      <img src={crop} width={20} />
                      <p className="gallery-head">На весь экран</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <img src={gallery2} />
                    <div className="gallery-picdec">
                      <img src={crop} width={20} />
                      <p className="gallery-head">На весь экран</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <img src={gallery3} />
                    <div className="gallery-picdec">
                      <img src={crop} width={20} />
                      <p className="gallery-head">На весь экран</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <img src={gallery4} />
                    <div className="gallery-picdec">
                      <img src={crop} width={20} />
                      <p className="gallery-head">На весь экран</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery5} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pics">
                    <div className="gallery-pos">
                      <img src={gallery6} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery7} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery8} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery9} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery10} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery11} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="gallery-pos">
                    <div className="gallery-pics">
                      <img src={gallery12} />
                      <div className="gallery-picdec">
                        <img src={crop} width={20} />
                        <p className="gallery-head">На весь экран</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
