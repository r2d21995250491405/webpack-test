import React from "react";
import { Header, Footer, Body } from "./pages";
import { useGetCurrencyQuery } from "./shared/services/api/currency/currencyApi";
import { Spinner } from "./widgets";
import { FC } from "react";
import styles from "./App.module.scss";

export const App: FC = () => {

  const { isLoading } = useGetCurrencyQuery();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles["container"]}>
      
      <Header />
      <Body />
      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
};
