import { SvgIcon, SelectSmall } from "../../widgets";
import React from "react";
import { FC } from "react";
import styles from "./Body.module.scss";

export const Body: FC = () => {
  return (
    <>
      <div className={styles['select']}>
        <SelectSmall />
      </div>
      <div className={styles["img"]}>
        <SvgIcon width="225px" height="341px" />
      </div>
    </>
  );
};
