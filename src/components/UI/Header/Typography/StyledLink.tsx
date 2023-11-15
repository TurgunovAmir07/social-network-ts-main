import React from "react"

type StyledLinkProps = {
  linkText: string,
}

export const StyledLink = ({ linkText }: StyledLinkProps) => {
  return (
    <a>{linkText}</a>
  )
}