// import React from "react"

// type HeaderProps = {
//   headerText: string,
// }

// export const Header = ({ headerText }: HeaderProps) => {
//   return (
//     <h1>{headerText}</h1>
//   )
// }

import React from "react"

type HeadingProps = {
  headingText: string,
}

export const Heading = ({ headingText }: HeadingProps) => {
  return (
    <h1>{headingText}</h1>
  )
}