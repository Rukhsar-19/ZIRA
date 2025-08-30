import React from "react";
import "../Styles/Productcard.css";
import Headermid from "./Headermid";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import product1 from "../Assests/product1.webp";
import product2 from "../Assests/product2.webp";
import product3 from "../Assests/product3.webp";
import product4 from "../Assests/product4.webp";
import banner from "../Assests/banner.webp";

const Productcard = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <Headermid />
      <section className="topsection"></section>
      <section className="Productcard">
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
            {/* swiper thumb nails */}
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="parentswiper">
                        <div className="main__swiper">
                          <Swiper
                            spaceBetween={10}
                            // navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                          >
                            <SwiperSlide>
                              <div className="swipermainback">
                                <img src={product1} />
                              </div>
                            </SwiperSlide>

                            <SwiperSlide>
                              <img src={product2} />
                            </SwiperSlide>

                            <SwiperSlide>
                              <img src={product3} />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <div className="swiper__thumb">
                          <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <img src={product4} />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={product2} />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src={product3} />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="product-nextsec">
                        <p className="product-head">Вино Пино Нуар</p>
                        <div className="product-review">
                          <div className="product-stars">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line star-grey"></i>
                          </div>
                          <p className="product-info">Рейтинг</p>
                          <p className="product-price">4 из 5</p>
                        </div>
                        <p className="catalog-lastprice product-fullprice">
                          20 000/ шт
                        </p>

                        <p className="product-para">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing It has survived
                          not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with when
                          an unknown printer took a galley of type and scrambled
                          it to make a type specimen book. It has survived not
                          only five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged.
                        </p>

                        <p className="product-endtext">
                          * Бесплатная доставка при заказе от 8 000 тенге
                        </p>
                        <div className="product-last">
                          <p className="product-content">
                            артикуль товара 000000
                          </p>
                          <button className="catalog-btn product-btn">
                            <div className="catabtn">
                              <p className="dish-txt">в корзину</p>
                              <i className="ri-shopping-cart-fill cart"></i>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* coldown to swiper full */}
                    <div className="col-lg-12">
                      <div className="product-title">
                        <p className="product-warn">
                          Сопутствующие предложения
                        </p>
                        <i className="ri-error-warning-fill"></i>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      {/* ccc */}
                      <div className="catalog-right">
                        <div className="row align-items-center">
                          {/* 1st card */}
                          <div className="col-lg-6">
                            <div className="catalog-content cat-para">
                              <p className="catalog-para product-card1">
                                Вино Puressio belnuoritto bancherio вторая
                                строчка
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="catalog-last">
                              <p className="catalog-lastprice  product-lastprice">
                                20 000/ шт
                              </p>

                              <button className="catalog-btn  pro-btn">
                                <div className="catabtn">
                                  <p className="cat-text">в корзину</p>
                                  <i className="ri-shopping-cart-fill"></i>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* cc */}
                      {/* 2 */}
                      <div className="catalog-right catlaog-gap">
                        <div className="row align-items-center">
                          {/* 1st card */}
                          <div className="col-lg-6">
                            <div className="catalog-content  cat-para">
                              <p className="catalog-para product-card1">
                                Вино Puressio belnuoritto bancherio вторая
                                строчка
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="catalog-last">
                              <p className="catalog-lastprice  product-lastprice">
                                20 000/ шт
                              </p>

                              <button className="catalog-btn  pro-btn">
                                <div className="catabtn">
                                  <p className="cat-text">в корзину</p>
                                  <i className="ri-shopping-cart-fill"></i>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 2 */}
                      {/* 3 */}
                      <div className="catalog-right catlaog-gap">
                        <div className="row align-items-center">
                          {/* 1st card */}
                          <div className="col-lg-6">
                            <div className="catalog-content cat-para">
                              <p className="catalog-para product-card1">
                                Вино Puressio belnuoritto bancherio вторая
                                строчка
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="catalog-last">
                              <p className="catalog-lastprice  product-lastprice">
                                20 000/ шт
                              </p>

                              <button className="catalog-btn  pro-btn">
                                <div className="catabtn">
                                  <p className="cat-text">в корзину</p>
                                  <i className="ri-shopping-cart-fill"></i>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 3 */}
                      {/* 4 */}
                      <div className="catalog-right catlaog-gap">
                        <div className="row align-items-center">
                          {/* 1st card */}
                          <div className="col-lg-6">
                            <div className="catalog-content  cat-para">
                              <p className="catalog-para product-card1">
                                Вино Puressio belnuoritto bancherio вторая
                                строчка
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="catalog-last">
                              <p className="catalog-lastprice  product-lastprice">
                                20 000/ шт
                              </p>

                              <button className="catalog-btn  pro-btn">
                                <div className="catabtn">
                                  <p className="cat-text">в корзину</p>
                                  <i className="ri-shopping-cart-fill"></i>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 4 */}
                    </div>
                  </div>
                </div>
                {/* bannerpart */}
                <div className="col-lg-3">
                  <div className="banner-parent">
                    <img src={banner} />
                    <div className="banner-back">
                      <p className="banner-head">
                        Название события в две строки DJEDDIE
                      </p>
                      <div className="banner-space">
                        <p className="banner-date">24.09.2019</p>
                        <p className="banner-time">с 00:00 по 05:00</p>
                      </div>
                      <p className="banner-content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scram
                        printer took a galley of type and scram
                      </p>
                    </div>
                    <div className="banner-label">Подронее </div>
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

export default Productcard;
