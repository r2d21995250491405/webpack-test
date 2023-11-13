import { FC } from "react";
import React from "react";
import cat from "../../shared/ui/icons/animals/Kitten.png";

interface ISvgProps {
  iconName?: string;
  dir?: string;
  width: string;
  height: string;
  alt?: string;
}

export const SvgIcon: FC<ISvgProps> = ({
  width,
  height,
  alt = "picture",
}) => {
  return (
    <img
      src={cat}
      width={width}
      height={height}
      style={{ display: "block" }}
      alt={alt}
    />
  );
};
