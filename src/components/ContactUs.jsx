import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/contact.scss";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact">
        <main>
          <h1>{t("contactUs")}</h1>

          <form>
            <div>
              <label>{t("name")}</label>
              <input type="text" required placeholder="Abc" />
            </div>

            <div>
              <label>{t("email")}</label>
              <input type="email" required placeholder="Abc@xyz.com" />
            </div>

            <button type="submit">{t("button")}</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default ContactUs;
