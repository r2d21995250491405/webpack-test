import { HEADER_TEXT, TEXT_ARRAY } from "./const";
import { Text } from "../../shared";
import React from "react";
import { FC } from "react";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const textMap = TEXT_ARRAY.map((item) => (
    <Text key={item} size="20px" tag="p">
      {item}
    </Text>
  ));

  return (
    <div className={styles["container"]}>
      <div className={styles["header_name"]}>
        <Text size="96px" tag="h1">
          {HEADER_TEXT}
        </Text>
      </div>
      <div className={styles["container_text"]}>{textMap}</div>
    </div>
  );
};
