
import React from 'react'

const ImageComp = ({
  className,
  imgurl="",
  alt = "testImg",
  ...restProps
}) => {

  return <img className={className} 
  src={imgurl} 
  alt={alt} 
  {...restProps} 
  loading={"lazy"}  
  />
}

export default ImageComp