import { useTranslation } from 'react-i18next'
import PictureMediaQuery from "../PictureMediaQuery";

import styles from "./styles.module.scss";
import Arrow from "../../../assets/icons/arrow.svg";
import ImgDefault from "../../../assets/images/getItTouch/1x.png";
import Img1x from "../../../assets/images/getItTouch/1x.webp";
import Img075x from "../../../assets/images/getItTouch/075x.webp";
import Img05x from "../../../assets/images/getItTouch/05x.webp";

export default function GetItTouch() {
  const { t } = useTranslation()
  return (
    <section className={styles.getItTouch}>
      <div className={styles.container}>
        <div className={styles.getItTouch_content}>
          <div className={styles.getItTouch_info}>
            <h2 className={styles.getItTouch_title}>{t('getItTouch.title')}</h2>
            <p className={styles.getItTouch_text}>
              {t('getItTouch.text')}
            </p>
          </div>
          <div>
            <form className={styles.getItTouch_form} action="">
              <div className={styles.getItTouch_form_inputs}>
                <input
                  className={styles.getItTouch_form_input}
                  type="text"
                  required={true}
                  placeholder={t('getItTouch.name')}
                />
                <input
                  className={styles.getItTouch_form_input}
                  type="email"
                  required={true}
                  placeholder={t('getItTouch.email')}
                />
                <input
                  className={styles.getItTouch_form_input}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required={true}
                  placeholder={t('getItTouch.phone')}
                />
              </div>
              <textarea
                className={styles.getItTouch_form_area}
                name=""
                id=""
                cols="10"
                rows="1"
                placeholder={t('getItTouch.message')}></textarea>
              <button className={styles.getItTouch_form_link} type="submit">
                {t('getItTouch.submit')} <img src={Arrow} alt="arrow-icon" />
              </button>
            </form>
          </div>
        </div>
        <PictureMediaQuery
          ImgDefault={ImgDefault}
          Img1x={Img1x}
          Img075x={Img075x}
          Img05x={Img05x}
          className={styles.getItTouch_img}
          width05={"(max-width: 700px)"}
          width075={"(max-width: 1024px)"}
          width1={"(min-width: 1024px)"}
        />
      </div>
    </section>
  );
}
