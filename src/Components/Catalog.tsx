import React from "react";
import "../Styles/Catalog.css";
import Headermid from "./Headermid";
import Filters from "./Filters";
import catalogpic1 from "../Assests/catalogpic1.webp";
const Catalog = () => {
  return (
    <>
      <Headermid />
      <Filters />
      <section className="Catalog">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="leftmenu">
                <div className="sidebar">
                  <h2>Наше меню</h2>

                  <div className="menu-item">
                    <p className="menu-label active">
                      Алкогольные напитки
                      <i className="ri-arrow-down-s-fill"></i>
                    </p>
                    <ul className="submenu open">
                      <li className="active">
                        <a href="#">Вино</a>
                      </li>
                      <li>
                        <a href="#">Водка</a>
                      </li>
                      <li>
                        <a href="#">Шампанское</a>
                      </li>
                      <li>
                        <a href="#">Пиво</a>
                      </li>
                      <li>
                        <a href="#">Виски</a>
                      </li>
                      <li>
                        <a href="#">Ликер</a>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Безалкогольные напитки
                      <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      К спиртному <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Горячие напитки<i className="ri-arrow-right-s-fill"></i>{" "}
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Холодные напитки <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Мясные блюда <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Гарниры <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Супы и крем-супы <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Холодные блюда <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Десерты <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a href="#" className="menu-label">
                      Закуски <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="catalog-right">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd card */}
              {/* 3rd card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd card */}
              {/* 4card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4card */}
              {/* 5 card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 5 card */}
              {/* 6 card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 6card */}
              {/* 7 card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 7 card */}
              {/* 8 card */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 8 card */}
              {/* 9 */}
              <div className="catalog-right catlaog-gap">
                <div className="row align-items-center">
                  {/* 1st card */}
                  <div className="col-lg-5">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="catalog-second">
                      <p className="catalog-detail">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="catalog-last">
                      <p className="catalog-lastprice">20 000/ шт</p>

                      <button className="catalog-btn">
                        <div className="catabtn">
                          <p className="cat-text">в корзину</p>
                          <i className="ri-shopping-cart-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 9 */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
