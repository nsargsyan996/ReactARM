import React from "react";
import { ButtonStyled } from "./Button.styled";
import clsx from "clsx";

export const Button = ({
  size,
  color,
  className,
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <ButtonStyled
      className={clsx(color, size, className)}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="button-text">{children}</span>
    </ButtonStyled>
  );
};
