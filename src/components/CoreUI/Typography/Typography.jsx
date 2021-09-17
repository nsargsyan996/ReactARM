import React from "react";
import styled from "styled-components";

const TypographyStyled = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default function Typography({
  children,
  color,
  fontSize,
  fontWeight,
  className,
}) {
  return (
    <TypographyStyled
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={className}
    >
      {children}
    </TypographyStyled>
  );
}

Typography.defaultProps = {
  color: "black",
  fontSize: 16,
  fontWeight: 400,
};
