import { FC, HTMLAttributes, ReactNode, createElement } from "react";
import React from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  tag: "h1" | "p";
  size?: string;
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ tag, size = "16px", children }) => {
  const Text = ({ ...props }: HTMLAttributes<HTMLElement>) =>
    createElement(tag, props, children);

  return <Text style={{ fontSize: size }}> {children}</Text>;
};
