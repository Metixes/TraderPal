import { useState } from "react";
import i18n from "../../i18next/i18n";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import Logo from "../../assets/icons/logo.svg";
import Arrow from "../../assets/icons/arrow.svg";

export default function Header() {
  const { t } = useTranslation();
  i18n.language = navigator.language
  const [active, setActive] = useState(true);

  const isOpenBurger = () => {
    active
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    setActive(!active);
  };

  return (
    <div className={styles.header}>
      <img className={styles.header_logo} src={Logo} alt="logo" />
      <div className={styles.header_wrapper}>
        <ul className={active ? styles.header_nav : styles.header_navActive}>
          <li className={styles.header_link}>{t("header.Home")}</li>
          <li className={styles.header_link}>{t("header.Faq")}</li>
          <li className={styles.header_link}>{t("header.Pricing")}</li>
          <li className={styles.header_link}>{t("header.Blog")}</li>
          <li className={styles.header_link}>{t("header.Contacts")}</li>
          <li className={styles.header_link}>{t("header.Login")}</li>
        </ul>
        <button className={styles.header_buttonFree}>
          {t("buttonFree")}
          <img src={Arrow} alt="arrow" />
        </button>
        <div className={styles.header_wrapperBurgerMenu} onClick={isOpenBurger}>
          <div
            className={
              active ? styles.header_burgerMenu : styles.header_burgerMenuActive
            }></div>
        </div>
      </div>
    </div>
  );
}
