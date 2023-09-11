import { useRef, useState } from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import sprite from "../../../assets/icons/sprite.svg";
import User1 from "../../../assets/images/carousel-users/user1.png";
import User2 from "../../../assets/images/carousel-users/user2.png";
import User3 from "../../../assets/images/carousel-users/user3.png";
import User4 from "../../../assets/images/carousel-users/user4.png";
import User5 from "../../../assets/images/carousel-users/user5.png";

const userIcons = [
  {
    id: 0,
    img: User1,
  },
  {
    id: 1,
    img: User2,
  },
  {
    id: 2,
    img: User3,
  },
  {
    id: 3,
    img: User4,
  },
  {
    id: 4,
    img: User5,
  },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const carouselRef = useRef()
  
  const onChange = (currentSlide) => {
    setActive(currentSlide);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.wrapperCarousel}>
        <Carousel
          ref={carouselRef}
          className={styles.carousel}
          afterChange={onChange}
          touchMove={true}
          speed={500}>
          <div className={styles.carousel_slide}>
            <div className={styles.carousel_info}>
              <h2 className={styles.carousel_title}>{t('testimonials.slide1.title')}</h2>
              <p className={styles.carousel_text}>
                {t('testimonials.slide1.text')}
              </p>
              <div className={styles.carousel_review}>
                <svg>
                  <use href={sprite + "#icon-bxs"}></use>
                </svg>
                <p className={styles.carousel_subtext}>
                  "{t('testimonials.slide1.subtext')}"
                </p>
              </div>
            </div>
            <div className={styles.carousel_userInfo}>
              <h3 className={styles.carousel_userLabel}>{t('testimonials.slide1.label')}</h3>
              <p className={styles.carousel_text}>{t('testimonials.slide1.label-text')}</p>
            </div>
          </div>
          <div className={styles.carousel_slide}>
            <div className={styles.carousel_info}>
              <h2 className={styles.carousel_title}>{t('testimonials.slide1.title')}</h2>
              <p className={styles.carousel_text}>
                {t('testimonials.slide1.text')}
              </p>
              <div className={styles.carousel_review}>
                <svg>
                  <use href={sprite + "#icon-bxs"}></use>
                </svg>
                <p className={styles.carousel_subtext}>
                  "{t('testimonials.slide1.subtext')}"
                </p>
              </div>
            </div>
            <div className={styles.carousel_userInfo}>
              <h3 className={styles.carousel_userLabel}>{t('testimonials.slide1.label')}</h3>
              <p className={styles.carousel_text}>{t('testimonials.slide1.label-text')}</p>
            </div>
          </div>
          <div className={styles.carousel_slide}>
            <div className={styles.carousel_info}>
              <h2 className={styles.carousel_title}>{t('testimonials.slide1.title')}</h2>
              <p className={styles.carousel_text}>
                {t('testimonials.slide1.text')}
              </p>
              <div className={styles.carousel_review}>
                <svg>
                  <use href={sprite + "#icon-bxs"}></use>
                </svg>
                <p className={styles.carousel_subtext}>
                  "{t('testimonials.slide1.subtext')}"
                </p>
              </div>
            </div>
            <div className={styles.carousel_userInfo}>
              <h3 className={styles.carousel_userLabel}>{t('testimonials.slide1.label')}</h3>
              <p className={styles.carousel_text}>{t('testimonials.slide1.label-text')}</p>
            </div>
          </div>
          <div className={styles.carousel_slide}>
            <div className={styles.carousel_info}>
              <h2 className={styles.carousel_title}>{t('testimonials.slide1.title')}</h2>
              <p className={styles.carousel_text}>
                {t('testimonials.slide1.text')}
              </p>
              <div className={styles.carousel_review}>
                <svg>
                  <use href={sprite + "#icon-bxs"}></use>
                </svg>
                <p className={styles.carousel_subtext}>
                  "{t('testimonials.slide1.subtext')}"
                </p>
              </div>
            </div>
            <div className={styles.carousel_userInfo}>
              <h3 className={styles.carousel_userLabel}>{t('testimonials.slide1.label')}</h3>
              <p className={styles.carousel_text}>{t('testimonials.slide1.label-text')}</p>
            </div>
          </div>
          <div className={styles.carousel_slide}>
            <div className={styles.carousel_info}>
              <h2 className={styles.carousel_title}>{t('testimonials.slide1.title')}</h2>
              <p className={styles.carousel_text}>
                {t('testimonials.slide1.text')}
              </p>
              <div className={styles.carousel_review}>
                <svg>
                  <use href={sprite + "#icon-bxs"}></use>
                </svg>
                <p className={styles.carousel_subtext}>
                  "{t('testimonials.slide1.subtext')}"
                </p>
              </div>
            </div>
            <div className={styles.carousel_userInfo}>
              <h3 className={styles.carousel_userLabel}>{t('testimonials.slide1.label')}</h3>
              <p className={styles.carousel_text}>{t('testimonials.slide1.label-text')}</p>
            </div>
          </div>
        </Carousel>
        <div className={styles.userIcons}>
          {userIcons.map((image) => (
            <img
              key={image.id}
              onClick={() => carouselRef.current.goTo(image.id)}
              className={
                image.id === active
                  ? styles.userIcons_iconActive
                  : styles.userIcons_icon
              }
              src={image.img}
              alt="user-icon"
            />
          ))}
        </div>
        <svg
          className={styles.nextButton}
          onClick={() => carouselRef.current.next()}>
          <use href={sprite + "#icon-next"}></use>
        </svg>
        <svg
          className={styles.prevButton}
          onClick={() => carouselRef.current.prev()}>
          <use href={sprite + "#icon-prev"}></use>
        </svg>
      </div>
    </section>
  );
}
