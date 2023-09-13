import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "../styles/footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <h2>{t("heading")}</h2>
        <p>{t("detail")}</p>
        <br />
        <em>{t("feedback")}</em>
        <strong>{t("copyright")}</strong>
      </div>

      <aside>
        <h4>{t("social")}</h4>

        <a href="https://github.com/deepanksha">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/deepanksha-pal-28610791/">
          <AiFillLinkedin />{" "}
        </a>
        <a href="https://www.youtube.com/@travelvlogs4229">
          <AiFillYoutube />{" "}
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
