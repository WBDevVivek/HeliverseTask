import React from 'react'

const sizes = {
  "3xl":"text-[60px]  sm:text-[40px]  md:text-[50px] lg:text-[60px] xl:text-[65px] font-bold ",
  "2xl":"text-[50px]  sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold ",
  xl: "text-[42px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold ",
  lg: "text-[28px] sm:text-2xl md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold",
  md: "text-2xl md:text-[22px] font-semibold",
  xs: "text-base font-semibold",
  sm: "text-xl font-semibold",
}



const HeadingComp = ({ children, as, className = "",
size="xs",
  ...restProps }) => {


  const Component = as || "h6";

  return (
    <Component className={` ${className} ${(size && sizes[size])}`} {...restProps}
    >
      {children}
    </Component>
  )
}

export default HeadingComp