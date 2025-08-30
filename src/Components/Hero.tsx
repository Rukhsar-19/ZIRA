import React from "react";
import "../Styles/Hero.css";
import heropic1 from "../Assests/heropic1.webp";
import heropic2 from "../Assests/heropic2.webp";
import heropic3 from "../Assests/heropic3.webp";
import heropic4 from "../Assests/heropic4.webp";
import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="heroparent">
        <div className="hero-leftside">
          <div className="hero-leftcontent">
            <p className="hero-leftpara">Эксклюзивное меню на Ваш вкус</p>
            <div className="hero-leftlinecontent">
              <div className="hero-lineo"></div>
              <p className="hero-linetext">Смотреть все меню</p>
            </div>
          </div>
          <div className="buttondefault">
            <button className="btn-fire hero-btn">
              <i className="ri-fire-line"></i>
              <p className="herobtn-text">АКЦИИ НА СЕГОДНЯ</p>
            </button>
          </div>
        </div>
        <div className="hero-rightside">
          <Swiper
            spaceBetween={20}
            slidesPerView={3.5}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiperslide-image">
                <img src={heropic1} />
                <div className="image-overlay"></div>
                <div className="buttonpos">
                  <div className=" label-slide">
                    <p className="label-text">Мясные блюда</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiperslide-image">
                <img src={heropic2} />
                    <div className="image-overlay"></div>
                <div className="buttonpos">
                  <div className=" label-slide">
                    <p className="label-text">Мясные блюда</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiperslide-image">
                <img src={heropic3} />
                    <div className="image-overlay"></div>
                <div className="buttonpos">
                  <div className=" label-slide">
                    <p className="label-text">Холодные блюда</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide-image">
                <img src={heropic4} />
                    <div className="image-overlay"></div>
                <div className="buttonpos">
                  <div className=" label-slide">
                    <p className="label-text">Десерты</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiperslide-image">
                <img src={heropic3} />
                    <div className="image-overlay"></div>
                <div className="buttonpos">
                  <div className=" label-slide">
                    <p className="label-text">Мясные блюда</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* swiper-pagination */}
          </Swiper>
          <div className="hero-bar">
            <div className="hero-leftlinecontent">
              <p className="hero-linetext">Смотреть все меню</p>
              <div className="hero-lineo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
