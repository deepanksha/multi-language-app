import React from "react";
import { useTranslation } from "react-i18next";
import vg from "../img/2.webp";
import "../styles/about.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="box">
        <img src={vg} alt="Graphics" />

        <div>
          <p>{t("aboutContent")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
