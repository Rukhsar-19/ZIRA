import React from "react";
import Headermid from "./Headermid";
import "../Styles/We.css";
import girl from "../Assests/girl.webp";
import rr from "../Assests/rr.webp";
import we1 from "../Assests/we1.webp";
import we2 from "../Assests/we2.webp";
import we3 from "../Assests/we3.webp";
import map from "../Assests/map.webp";

const We = () => {
  return (
    <>
      <Headermid />
      <section className="topsection"></section>
      <section className="We">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="we-first">
                <p className="we-headwhite">О компании Zira</p>
                <p className="we-para">
                  Источник информации сайт:{" "}
                  <span className="we-color"> zira.kz</span>
                </p>
                <p className="we-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus elementum tincidunt risus, et bibendum neque
                  sollicitudin a. Nunc id lectus tincidunt, interdum mi quis,
                  consectetur nisl. Duis ut ipsum nulla. Etiam pulvinar nisi ac
                  vestibulum tempor. Morbi euismod, mauris non ultricies
                  tincidunt, quam sapien rhoncus augue, non placerat nunc enim
                  in quam. Vestibulum vehicula finibus molestie. Aliquam
                  tristique nunc non efficitur accumsan. Nam vestibulum, ipsum
                  quis lacinia pretium, ex purus tempor diam, et scelerisque
                  elit ipsum eu quam. Vestibulum vitae dapibus odio, vel
                  accumsan neque. In in pharetra leo. Praesent at orci ut nibh
                  mollis consequat non non dolor.
                </p>
                <p className="we-detail we-dist">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus elementum tincidunt risus, et bibendum neque
                  sollicitudin a. Nunc id lectus tincidunt, interdum mi quis,
                  consectetur nisl. Duis ut ipsum nulla. Etiam pulvinar nisi ac
                  vestibulum tempor. Morbi euismod, mauris non ultricies
                  tincidunt, quam sapien rhoncus augue, non placerat nunc enim
                  in quam. Vestibulum vehicula finibus molestie. Aliquam
                  tristique nunc non efficitur accumsan.
                </p>
                <p className="we-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus elementum tincidunt risus, et bibendum neque
                  sollicitudin a. Nunc id lectus tincidunt, interdum mi quis,
                  consectetur nisl. Duis ut ipsum nulla. Etiam pulvinar nisi ac
                  vestibulum tempor.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="we-headwhite">Наш блог</p>
              <div className="we-parent">
                <div className="we-second">
                  <div className="we-loremback">
                    <p className="we-loremcontent">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus elementum tincidunt risus, et bibendum neque
                      sollicitudin a. Nunc id lectus tincidunt, interdum mi
                      quis, consectetur nisl. Duis ut ipsum nulla. Etiam
                      pulvinar nisi ac vestibulum tempor. Morbi euismod, mauris
                      non ultricies tincidunt. Morbi euismod, mauris non
                      ultricies tincidunt.{" "}
                    </p>
                    <p className="we-link">Подробнее</p>
                  </div>
                </div>
                <div className="we-img">
                  <img src={girl} />
                </div>
              </div>
              <div className="we-parent">
                <div className="we-img">
                  <img src={rr} />
                </div>
                <div className="we-second">
                  <div className="we-loremback">
                    <p className="we-loremcontent">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus elementum tincidunt risus, et bibendum neque
                      sollicitudin a. Nunc id lectus tincidunt, interdum mi
                      quis, consectetur nisl. Duis ut ipsum nulla. Etiam
                      pulvinar nisi ac vestibulum tempor. Morbi euismod, mauris
                      non ultricies tincidunt. Morbi euismod, mauris non
                      ultricies tincidunt.
                    </p>
                    <p className="we-link">Подробнее</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="third-parent">
                <div className="we-third">
                  <img src={we2} />
                  <div className="we-label">
                    <div className="glass-sign">
                      <i className="ri-goblet-2-fill glass-orange"></i>
                      <p className="glass-content txt-orange">паб</p>
                    </div>
                  </div>
                </div>
                <div className="we-third">
                  <img src={we1} />
                  <div className="we-label">
                    <div className="glass-sign">
                      <i className="ri-sun-fill"></i>
                      <p className="glass-content">летка</p>
                    </div>
                  </div>
                </div>
                <div className="we-third">
                  <img src={we3} />
                  <div className="we-label">
                    <div className="glass-sign">
                      <i className="ri-brush-ai-fill"></i>
                      <p className="glass-content">караоке</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="we-fourth">
                <div className="we-mailphone">
                  <div className="we-allmsg">
                    <a href="mailto:support@zira.kz" className="we-msg">
                      <i className="ri-mail-fill glass-orange"></i>
                      support@zira.kz
                    </a>
                    <div className="msg-link">
                      <p className="msg-cc">написать</p>
                    </div>
                  </div>
                  <div className="we-allmsg">
                     <a href="mailto:support@zira.kz" className="we-mail">support@zira.kz</a>
                   
                    <div className="msg-link">
                      <p className="msg-cc">написать</p>
                    </div>
                  </div>

                  <div className="we-allmsg">
                     <a href="mailto:support@zira.kz" className="we-mail">support@zira.kz</a>
                    <div className="msg-link">
                      <p className="msg-cc">написать</p>
                    </div>
                  </div>
                  <div className="we-allmsg we-gp">
                    <p className="we-msg">
                      <i className="ri-phone-fill glass-orange"></i>+7 (700)
                      000-00-00
                    </p>
                    <div className="msg-link">
                      <p className="msg-cc">написать</p>
                    </div>
                  </div>
                  <div className="we-allmsg">
                    <p className="we-mail">+7 (700) 000-00-00</p>
                    <div className="msg-link">
                      <p className="msg-cc">написать</p>
                    </div>
                  </div>
                  <div className="we-allmsg we-gp">
                    <p className="we-msg">
                      <i className="ri-map-pin-fill glass-orange"></i>г.
                      Караганда, ул. Ержанова 34/1
                    </p>
                    <div className="msg-link">
                      <p className="msg-cc">написать</p>
                    </div>
                  </div>
                </div>
                <div className="we-map">
                  <img src={map} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default We;
