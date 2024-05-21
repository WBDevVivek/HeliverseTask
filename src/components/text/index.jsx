import React from 'react'

const TextComp = ({ children, className = "",
  as, color = "text-paraColor", ...restProps }) => {


  const Component = as || "p";

  return (
    <Component className={` ${className} ${color}`} {...restProps}
    >
      {children}
    </Component>
  )
}

export default TextComp