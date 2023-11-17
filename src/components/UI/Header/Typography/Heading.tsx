import React from "react"

type HeadingProps = {
  headingText: string,
}

export const Heading = ({ headingText }: HeadingProps) => {
  return (
    <h1>{headingText}</h1>
  )
}