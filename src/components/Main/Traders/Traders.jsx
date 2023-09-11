import { useTranslation } from 'react-i18next'

import styles from "./styles.module.scss";

export default function Traders() {
  const { t } = useTranslation()
  return (
    <section className={styles.traders}>
      <div className={styles.container}>
        <h2 className={styles.traders_title}>
          {t('traders.title')}
        </h2>
        <p className={styles.traders_text}>
          {t('traders.text')}
        </p>
      </div>
    </section>
  );
}
