import { Collapse } from "antd";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import Logo from "../../assets/icons/logo.svg";
import Facebook from "../../assets/icons/facebook.png";
import Twitter from "../../assets/icons/twitter.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";

export default function Footer() {
  const { t } = useTranslation();
  const width = window.innerWidth;

  const linksAbout = [
    t("footer.about.link1"),
    t("footer.about.link2"),
    t("footer.about.link3"),
    t("footer.about.link4"),
    t("footer.about.link5"),
    t("footer.about.link6"),
    t("footer.about.link7"),
  ];
  const linksSolutions = [
    t("footer.solutions.link1"),
    t("footer.solutions.link2"),
    t("footer.solutions.link3"),
    t("footer.solutions.link4"),
    t("footer.solutions.link5"),
    t("footer.solutions.link6"),
    t("footer.solutions.link"),
  ];
  const linksSupport = [
    t("footer.support.link1"),
    t("footer.support.link2"),
    t("footer.support.link3"),
    t("footer.support.link4"),
    t("footer.support.link5"),
    t("footer.support.link6"),
    t("footer.support.link7"),
  ];

  const items = [
    {
      key: "1",
      label: (
        <span className={styles.footer_label}>{t("footer.about.label")}</span>
      ),
      children: linksAbout.map((el) => (
        <div key={crypto.randomUUID()} className={styles.footer_links}>
          <svg className={styles.footer_svgArrow}>
            <use href={sprite + "#icon-arrow"}></use>
          </svg>
          <a className={styles.footer_link} href="">
            {el}
          </a>
        </div>
      )),
    },
    {
      key: "2",
      label: (
        <span className={styles.footer_label}>
          {t("footer.solutions.label")}
        </span>
      ),
      children: linksSolutions.map((el) => (
        <div key={crypto.randomUUID()} className={styles.footer_links}>
          <svg className={styles.footer_svgArrow}>
            <use href={sprite + "#icon-arrow"}></use>
          </svg>
          <a className={styles.footer_link} href="">
            {el}
          </a>
        </div>
      )),
    },
    {
      key: "3",
      label: (
        <span className={styles.footer_label}>{t("footer.support.label")}</span>
      ),
      children: linksSupport.map((el) => (
        <div key={crypto.randomUUID()} className={styles.footer_links}>
          <svg className={styles.footer_svgArrow}>
            <use href={sprite + "#icon-arrow"}></use>
          </svg>
          <a className={styles.footer_link} href="">
            {el}
          </a>
        </div>
      )),
    },
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.container}>
            <div className={styles.footer_info}>
              <img src={Logo} alt="logo" />
              <p className={styles.footer_text}>{t("footer.text")}</p>
              <div className={styles.footer_socialLinks}>
                <a className={styles.footer_socialLinks_link} href="#">
                  <img src={Facebook} alt="social-icon" />
                </a>
                <a className={styles.footer_socialLinks_link} href="#">
                  <img src={Twitter} alt="social-icon" />
                </a>
                <a className={styles.footer_socialLinks_link} href="#">
                  <img src={Linkedin} alt="social-icon" />
                </a>
                <a className={styles.footer_socialLinks_link} href="#">
                  <img src={Instagram} alt="social-icon" />
                </a>
              </div>
            </div>
            <div className={styles.footer_wrapperLinks}>
              {width >= 530 ? (
                <Collapse
                  activeKey={["1", "2", "3"]}
                  className={styles.footer_containerLinks}
                  items={items}
                />
              ) : (
                <Collapse
                  accordion={true}
                  defaultActiveKey={["1"]}
                  className={styles.footer_containerLinks}
                  items={items}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.commercial}>
        <span className={styles.commercial_text}>{t("commercial.label1")}</span>
        <span className={styles.commercial_text}>{t("commercial.label2")}</span>
      </div>
    </>
  );
}
