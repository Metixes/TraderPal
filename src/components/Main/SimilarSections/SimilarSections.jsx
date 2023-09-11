import { useTranslation } from 'react-i18next'

import PictureMediaQuery from "../PictureMediaQuery";

import styles from "./styles.module.scss";
import sprite from "../../../assets/images/icon.png";

import MetricImg1 from "../../../assets/images/metrics/1x.png";
import MetricImg1w from "../../../assets/images/metrics/1x.webp";
import MetricImg075w from "../../../assets/images/metrics/075x.webp";
import MetricImg05w from "../../../assets/images/metrics/05x.webp";
import PastImg1 from "../../../assets/images/past/1x.png";
import PastImg1w from "../../../assets/images/past/1x.webp";
import PastImg075w from "../../../assets/images/past/075x.webp";
import PastImg05w from "../../../assets/images/past/05x.webp";
import ReportsImg1 from "../../../assets/images/reports/1x.png";
import ReportsImg1w from "../../../assets/images/reports/1x.webp";
import ReportsImg075w from "../../../assets/images/reports/075x.webp";
import ReportsImg05w from "../../../assets/images/reports/05x.webp";
import JournalImg1 from "../../../assets/images/journal/1x.png";
import JournalImg1w from "../../../assets/images/journal/1x.webp";
import JournalImg075w from "../../../assets/images/journal/075x.webp";
import JournalImg05w from "../../../assets/images/journal/05x.webp";

export default function SimilarSections() {
  const { t } = useTranslation()
  const blocks = [
    {
      id: 1,
      title: t('similarSectionMonitor.title'),
      text: t('similarSectionMonitor.text'),
      bg: "",
      ul: [
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionMonitor.label1'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionMonitor.label2'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionMonitor.label3'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionMonitor.label4'),
        },
      ],
      ImgDefault: MetricImg1,
      Img1x: MetricImg1w,
      Img075x: MetricImg075w,
      Img05x: MetricImg05w,
    },
    {
      id: 2,
      title: t('similarSectionView.title'),
      text: t('similarSectionView.text'),
      bg: styles.content2,
      ul: [
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionView.label1'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionView.label2'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionView.label3'),
        },
      ],
      ImgDefault: PastImg1,
      Img1x: PastImg1w,
      Img075x: PastImg075w,
      Img05x: PastImg05w,
    },
    {
      id: 3,
      title: t('similarSectionTrading.title'),
      text: t('similarSectionTrading.text'),
      bg: "",
      ul: [
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionTrading.label1'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionTrading.label2'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionTrading.label3'),
        },
        {
          svg: sprite + "#icon-list",
          label:
            t('similarSectionTrading.label4'),
        },
      ],
      ImgDefault: ReportsImg1,
      Img1x: ReportsImg1w,
      Img075x: ReportsImg075w,
      Img05x: ReportsImg05w,
    },
    {
      id: 4,
      title: t('similarSectionJournal.title'),
      text: t('similarSectionJournal.text'),
      bg: styles.content4,
      ul: [
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionJournal.label1'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionJournal.label2'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionJournal.label3'),
        },
        {
          svg: sprite + "#icon-list",
          label: t('similarSectionJournal.label4'),
        },
      ],
      ImgDefault: JournalImg1,
      Img1x: JournalImg1w,
      Img075x: JournalImg075w,
      Img05x: JournalImg05w,
    },
  ];
  return (
    <>
      {blocks.length !== 0 &&
        blocks.map((el) => (
          <section className={el.bg ? el.bg : styles.contents} key={el.id}>
            <div className={styles.contents_wrapper}>
              <PictureMediaQuery
                ImgDefault={el.ImgDefault}
                Img1x={el.Img1x}
                Img075x={el.Img075x}
                Img05x={el.Img05x}
                className={styles.contents_img}
                width05={"(max-width: 786px)"}
                width075={"(max-width: 1170px)"}
                width1={"(min-width: 1170px)"}
              />
              <div className={styles.contents_info}>
                <h2 className={styles.contents_title}>{el.title}</h2>
                <p className={styles.contents_text}>{el.text}</p>
                <ul className={styles.contents_items}>
                  {el.ul.map((item) => (
                    <div key={crypto.randomUUID()}>
                      <img src={sprite} alt="icon" />
                      <span className={styles.contents_item}>{item.label}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}
