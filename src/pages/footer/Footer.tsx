import { Text } from "../../shared/ui/text/Text";
import React, { useEffect, useState } from "react";
import { FOOTE_TEXT } from "./const";

export const Footer = () => {
  const [widthScreen, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, [window.innerWidth]);

  return (
    <>
      {widthScreen <= 680 && (
        <Text tag="h1" size="68px">
          {" "}
          {FOOTE_TEXT}
        </Text>
      )}
      {widthScreen >= 680 && (
        <Text tag="h1" size="96px">
          {" "}
          {FOOTE_TEXT}
        </Text>
      )}
    </>
  );
};
