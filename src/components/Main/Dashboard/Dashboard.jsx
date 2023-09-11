import PictureMediaQuery from "../PictureMediaQuery";
import { useTranslation } from 'react-i18next'

import styles from "./styles.module.scss";
import Arrow from "../../../assets/icons/arrow.svg";
import ImgDefault from "../../../assets/images/dashboard/1x.png";
import Img1x from "../../../assets/images/dashboard/1x.webp";
import Img075x from "../../../assets/images/dashboard/075x.webp";
import Img05x from "../../../assets/images/dashboard/05x.webp";
import sprite from "../../../assets/icons/sprite.svg";

export default function Dashboard() {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.dashboard}>
        <section className={styles.dashboard_info}>
          <h1 className={styles.dashboard_title}>
            {t('dashboard.title')}
          </h1>
          <p className={styles.dashboard_description}>
            {t('dashboard.text')}
          </p>
          <a className={styles.dashboard_link} href="#">
            {t('dashboard.button-text')} <img src={Arrow} alt="arrow" />
          </a>
        </section>
        <PictureMediaQuery
          ImgDefault={ImgDefault} 
          Img1x={Img1x} 
          Img075x={Img075x} 
          Img05x={Img05x} 
          className={styles.dashboard_img}
          width05={"(max-width: 786px)"}
          width075={"(max-width: 1320px)"}
          width1={"(min-width: 1320px)"}
        />
      </div>
      <div className={styles.traders}>
        <div className={styles.traders_inner}>
            <svg>
              <use href={sprite + "#bfutures"}></use>
            </svg>
        </div>
        <div className={styles.traders_inner}>
            <svg>
              <use href={sprite + "#binance"}></use>
            </svg>
        </div>
        <div className={styles.traders_inner}>
            <svg>
              <use href={sprite + "#bybit"}></use>
            </svg>
        </div>
        <div className={styles.traders_inner}>
            <svg>
              <use href={sprite + "#bitget"}></use>
            </svg>
        </div>
        <div className={styles.traders_inner}>
            <svg>
              <use href={sprite + "#byb_it"}></use>
            </svg>
        </div>
      </div>
    </>
  );
}
