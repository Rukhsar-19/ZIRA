import React from "react";
import "../Styles/Dishes.css";
import Headermid from "./Headermid";
import Filters from "./Filters";
import dish1 from "../Assests/dish1.webp";
const Dishes = () => {
  return (
    <>
      <Headermid />
      <Filters />
      <section className="Dishes">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="leftmenu">
                <div className="sidebar">
                  <h2>Наше меню</h2>

                  <div className="menu-item">
                    <a href="#" className="menu-label active">
                      Алкогольные напитки
                      <i className="ri-arrow-down-s-fill"></i>
                    </a>
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
            {/* left-menuend */}
            <div className="col-lg-9">
              <div className="row">
                {/* card1 */}
                <div className="col-lg-4">
                  <div className="dishes-parent">
                    <div className="dishes-right">
                      <img src={dish1} />
                      <div className="dish-label">
                        <i className="ri-fire-line"></i>
                      </div>
                    </div>
                    {/* down para */}
                    <div className="dishes-back">
                      <p className="dishes-head">
                        Вино Puressio belnuoritto bancherio
                      </p>

                      <p className="dishes-content">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                      <div className="catalog-last dishes-last">
                        <p className="catalog-lastprice dishes-price">
                          20 000/ шт
                        </p>

                        <button className="catalog-btn dishes-btn">
                          <div className="catabtn">
                            <p className="dish-txt">в корзину</p>
                            <i className="ri-shopping-cart-fill cart"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card1 */}
                {/* card2 */}
                <div className="col-lg-4">
                  <div className="dishes-parent">
                    <div className="dishes-right">
                      <img src={dish1} />
                      <div className="dish-label">
                        <i className="ri-fire-line"></i>
                      </div>
                    </div>
                    {/* down para */}
                    <div className="dishes-back">
                      <p className="dishes-head">
                        Вино Puressio belnuoritto bancherio
                      </p>

                      <p className="dishes-content">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                      <div className="catalog-last dishes-last">
                        <p className="catalog-lastprice dishes-price">
                          20 000/ шт
                        </p>

                        <button className="catalog-btn dishes-btn">
                          <div className="catabtn">
                            <p className="dish-txt">в корзину</p>
                            <i className="ri-shopping-cart-fill  cart"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card2 */}
                {/* card3 */}
                <div className="col-lg-4">
                  <div className="dishes-parent">
                    <div className="dishes-right">
                      <img src={dish1} />
                      <div className="dish-label">
                        <i className="ri-fire-line"></i>
                      </div>
                    </div>
                    {/* down para */}
                    <div className="dishes-back">
                      <p className="dishes-head">
                        Вино Puressio belnuoritto bancherio
                      </p>

                      <p className="dishes-content">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                      <div className="catalog-last dishes-last">
                        <p className="catalog-lastprice dishes-price">
                          20 000/ шт
                        </p>

                        <button className="catalog-btn dishes-btn">
                          <div className="catabtn">
                            <p className="dish-txt">в корзину</p>
                            <i className="ri-shopping-cart-fill  cart"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card3 */}
                {/* card4 */}
                <div className="col-lg-4">
                  <div className="dishes-parent dishes-separate">
                    <div className="dishes-right">
                      <img src={dish1} />
                      <div className="dish-label">
                        <i className="ri-fire-line"></i>
                      </div>
                    </div>
                    {/* down para */}
                    <div className="dishes-back">
                      <p className="dishes-head">
                        Вино Puressio belnuoritto bancherio
                      </p>

                      <p className="dishes-content">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                      <div className="catalog-last dishes-last">
                        <p className="catalog-lastprice dishes-price">
                          20 000/ шт
                        </p>

                        <button className="catalog-btn dishes-btn">
                          <div className="catabtn">
                            <p className="dish-txt">в корзину</p>
                            <i className="ri-shopping-cart-fill cart"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card4 */}
                {/* card5 */}
                <div className="col-lg-4">
                  <div className="dishes-parent">
                    <div className="dishes-right dishes-separate">
                      <img src={dish1} />
                      <div className="dish-label">
                        <i className="ri-fire-line"></i>
                      </div>
                    </div>
                    {/* down para */}
                    <div className="dishes-back">
                      <p className="dishes-head">
                        Вино Puressio belnuoritto bancherio
                      </p>

                      <p className="dishes-content">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                      <div className="catalog-last dishes-last">
                        <p className="catalog-lastprice dishes-price">
                          20 000/ шт
                        </p>

                        <button className="catalog-btn dishes-btn">
                          <div className="catabtn">
                            <p className="dish-txt">в корзину</p>
                            <i className="ri-shopping-cart-fill  cart"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card5 */}
                {/* card6 */}
                <div className="col-lg-4">
                  <div className="dishes-parent">
                    <div className="dishes-right dishes-separate">
                      <img src={dish1} />
                      <div className="dish-label">
                        <i className="ri-fire-line"></i>
                      </div>
                    </div>
                    {/* down para */}
                    <div className="dishes-back">
                      <p className="dishes-head">
                        Вино Puressio belnuoritto bancherio
                      </p>

                      <p className="dishes-content">
                        Красное вино. Молдавская выдержка. Изысканные нотки
                        имбиря и медовый оттенок. 1996 года
                      </p>
                      <div className="catalog-last dishes-last">
                        <p className="catalog-lastprice dishes-price">
                          20 000/ шт
                        </p>

                        <button className="catalog-btn dishes-btn">
                          <div className="catabtn">
                            <p className="dish-txt">в корзину</p>
                            <i className="ri-shopping-cart-fill cart"></i>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card6 */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dishes;
