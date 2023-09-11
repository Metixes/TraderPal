import styles from "./styles.module.scss";
import sprite from "../../../assets/icons/sprite.svg";
import { useTranslation } from 'react-i18next'

export default function Appku() {
  const { t } = useTranslation()
  return (
    <section className={styles.appku}>
      <div className={styles.container}>
        <h2 className={styles.appku_title}>APPKU Features</h2>
        <div className={styles.appku_list}>
          <div className={styles.appku_item}>
            <svg className={styles.appku_icon} width="166px" height="42.7203px">
              <use href={sprite + "#user"}></use>
            </svg>
            <span className={styles.appku_label}>{t('appku.label1')}</span>
            <p className={styles.appku_text}>
              {t('appku.text1')}
            </p>
          </div>
          <div className={styles.appku_item}>
            <svg className={styles.appku_icon} width="166px" height="42.7203px">
              <use href={sprite + "#user-seting"}></use>
            </svg>
            <span className={styles.appku_label}>{t('appku.label2')}</span>
            <p className={styles.appku_text}>
              {t('appku.text2')}
            </p>
          </div>
          <div className={styles.appku_item}>
            <svg className={styles.appku_icon} width="166px" height="42.7203px">
              <use href={sprite + "#detail"}></use>
            </svg>
            <span className={styles.appku_label}>{t('appku.label3')}</span>
            <p className={styles.appku_text}>
              {t('appku.text3')}
            </p>
          </div>
          <div className={styles.appku_item}>
            <svg className={styles.appku_icon} width="166px" height="42.7203px">
              <use href={sprite + "#charts"}></use>
            </svg>
            <span className={styles.appku_label}>{t('appku.label4')}</span>
            <p className={styles.appku_text}>
              {t('appku.text4')}
            </p>
          </div>
          <div className={styles.appku_item}>
            <svg className={styles.appku_icon} width="166px" height="42.7203px">
              <use href={sprite + "#seting"}></use>
            </svg>
            <span className={styles.appku_label}>{t('appku.label5')}</span>
            <p className={styles.appku_text}>
              {t('appku.text5')}
            </p>
          </div>
          <div className={styles.appku_item}>
            <svg className={styles.appku_icon} width="166px" height="42.7203px">
              <use href={sprite + "#users"}></use>
            </svg>
            <span className={styles.appku_label}>{t('appku.label6')}</span>
            <p className={styles.appku_text}>
              {t('appku.text6')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
