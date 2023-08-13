import React from "react"

type Props = React.ComponentProps<"button">

const Button: React.FC<Props> = (props) => {
  return <button {...props} />
}

export default Button
