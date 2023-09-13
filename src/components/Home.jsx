import React from "react";

import { useTranslation } from "react-i18next";
import "../styles/home.scss";
import { Carousel } from "react-responsive-carousel";
import img1 from "../img/3.jpg";
import img2 from "../img/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="card">
        <h1>{t("home1")} </h1>
        <p>{t("welcome")} </p>
        <button>{t("button")} </button>
      </div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">{t("heading")}</p>
        </div>

        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">{t("contactContent")}</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
