import React from "react";
import "../Styles/Search.css";
import { useRef, useState } from "react";
import Headermid from "./Headermid";
import catalogpic1 from "../Assests/catalogpic1.webp";
const Search = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Headermid />
      <section className="list-section">
        <div className="list-info">
          <div className="list-name">
            <p className="list-head">Наименование</p>
            <p className="list-second">Цена</p>
            <p className="list-third">Количество</p>
            <p className="list-fourth">Стоимость</p>
          </div>
        </div>
      </section>
      <section className="Search">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="catalog-right search-pic">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para search-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="countsec">
                    <div className="counter">
                      <div className="button-block">
                        <button
                          onClick={() => count > 0 && setCount(count - 1)}
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="count-display">{count}шт</span>
                        <button onClick={() => setCount(count + 1)}>
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice search-close">
                      удалить <i className="ri-close-line"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="catalog-right search-pic catlaog-gap">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para search-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="countsec">
                    <div className="counter">
                      <div className="button-block">
                        <button
                          onClick={() => count > 0 && setCount(count - 1)}
                        >
                          <i className="ri-subtract-fill"></i>
                        </button>
                        <span className="count-display">{count} шт</span>
                        <button onClick={() => setCount(count + 1)}>
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice search-close">
                      удалить <i className="ri-close-line"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              {/* 3 */}
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="catalog-right search-pic catlaog-gap">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para search-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="countsec">
                    <div className="counter">
                      <div className="button-block">
                        <button
                          onClick={() => count > 0 && setCount(count - 1)}
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="count-display">{count} шт</span>
                        <button onClick={() => setCount(count + 1)}>
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice search-close">
                      удалить <i className="ri-close-line"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              {/* 4 */}
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="catalog-right search-pic catlaog-gap">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para search-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="countsec">
                    <div className="counter">
                      <div className="button-block">
                        <button
                          onClick={() => count > 0 && setCount(count - 1)}
                        >
                          <i className="ri-subtract-fill"></i>
                        </button>
                        <span className="count-display">{count} шт</span>
                        <button onClick={() => setCount(count + 1)}>
                          <i className="ri-add-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice search-close">
                      удалить <i className="ri-close-line"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* 4 */}
              {/* 5 */}
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="catalog-right search-pic catlaog-gap">
                    <div className="catalog-pic">
                      <img src={catalogpic1} width={118} />
                      <div className="catalog-content">
                        <p className="catalog-para search-para">
                          Вино Puressio belnuoritto bancherio вторая строчка
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="countsec">
                    <div className="counter">
                      <div className="button-block">
                        <button
                          onClick={() => count > 0 && setCount(count - 1)}
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="count-display">{count} шт</span>
                        <button onClick={() => setCount(count + 1)}>
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice">20 000/ шт</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="catalog-last search-last">
                    <p className="catalog-lastprice search-close">
                      удалить <i className="ri-close-line"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* 5 */}
            </div>
            <div className="col-lg-3">
              <div className="search-left">
                <div className="search-top">
                  <p className="search-head">Предупреждение</p>
                  <p className="search-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus elementum tincidunt risus, et bibendum neque
                    sollicitudin a. Nunc id lectus tincidunt, interdum mi quis,
                    consectetur nisl. Duis ut ipsum nulla. Etiam pulvinar nisi
                    ac vestibulum tempor. Morbi euismod, mauris non ultricies
                    tincidunt. Morbi euismod, mauris non ultricies tincidunt.{" "}
                  </p>
                  <div className="basket-detail">
                    <p className="basket-name">Итого:</p>
                    <p className="basket-number">000 000 000</p>
                    <p className="basket-info">тенге</p>
                  </div>
                  <button className="basket-btn">
                    <p className="basket-txt">Оформить заказ</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
