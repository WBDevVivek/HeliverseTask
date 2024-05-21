import React from 'react'

const LinkComp = ({ children, href, className, ...restProps }) => {
    return (
        <a
            href={href} className={` ${className}`} {...restProps}
        >
            {children}
        </a>
    )
}

export default LinkComp

