import { useTranslation } from 'react-i18next'
import PictureMediaQuery from '../PictureMediaQuery'

import styles from "./styles.module.scss";
import Arrow from '../../../assets/icons/arrow.svg'
import FirstImgDefault from "../../../assets/images/software/firstImg/1x.png";
import FirstImg1x from "../../../assets/images/software/firstImg/1x.webp";
import FirstImg075x from "../../../assets/images/software/firstImg/075x.webp";
import FirstImg05x from "../../../assets/images/software/firstImg/05x.webp";
import SecondImgDefault from "../../../assets/images/software/secondIng/1x.png";
import SecondImg1x from "../../../assets/images/software/secondIng/1x.webp";
import SecondImg075x from "../../../assets/images/software/secondIng/075x.webp";
import SecondImg05x from "../../../assets/images/software/secondIng/05x.webp";

export default function Software() {
  const { t } = useTranslation()
  return (
    <section className={styles.software}>
      <div className={styles.software_info}>
        <h2 className={styles.software_title}>
          {t('software.title')}
        </h2>
        <p className={styles.software_text}>
          {t('software.text')}
        </p>
        <a className={styles.software_link} href="#">
          {t('buttonFree')}
          <img src={Arrow} alt="arrow" />
        </a>
      </div>
      <div className={styles.software_content}>
        <PictureMediaQuery
            className={styles.software_img}
            ImgDefault={FirstImgDefault} 
            Img1x={FirstImg1x} 
            Img075x={FirstImg075x} 
            Img05x={FirstImg05x}
            width05={"(max-width: 786px)"}
            width075={"(max-width: 1200px)"}
            width1={"(min-width: 1200px)"}
        />
        <PictureMediaQuery
            className={styles.software_img}
            ImgDefault={SecondImgDefault} 
            Img1x={SecondImg1x} 
            Img075x={SecondImg075x} 
            Img05x={SecondImg05x}
            width05={"(max-width: 786px)"}
            width075={"(max-width: 1300px)"}
            width1={"(max-width: 1400px)"}
        />
      </div>
    </section>
  );
}
