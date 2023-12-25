import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../theme/colors";

type StyledLinkProps = {
  linkText: string;
  to: string;
};

export const StyledLink = ({ linkText, to }: StyledLinkProps) => {
  return (
    <Link style={{ color: `${colors.primeColor}` }} to={to}>
      {linkText}
    </Link>
  );
};
