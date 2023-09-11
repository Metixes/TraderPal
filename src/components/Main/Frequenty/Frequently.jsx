import { useState } from "react";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import sprite from "../../../assets/icons/sprite.svg";

export default function Frequently() {
  const { t } = useTranslation();
  const text = t("frequently.text1");
  const items = [
    {
      key: "1",
      label: t("frequently.label1"),
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: t("frequently.label2"),
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: t("frequently.label3"),
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: t("frequently.label4"),
      children: <p>{text}</p>,
    },
  ];

  const onChangeIcon = (key) => {
    return key.isActive === true ? (
      <svg width="166px" height="42.7203px">
        <use href={sprite + "#icon-close"}></use>
      </svg>
    ) : (
      <svg width="166px" height="42.7203px">
        <use href={sprite + "#icon-active"}></use>
      </svg>
    );
  };

  return (
    <section className={styles.frequently}>
      <div className={styles.container}>
        <div className={styles.frequently_info}>
          <h2 className={styles.frequently_title}>
            Frequently asked questions
          </h2>
          <p className={styles.frequently_text}>
            Don't see an answer to a question you have? Get in touch.
          </p>
        </div>
        <Collapse
          className={styles.frequently_questions}
          items={items}
          expandIcon={onChangeIcon}
          expandIconPosition={"end"}
        />
      </div>
    </section>
  );
}
