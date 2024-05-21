import React from 'react'
import TextComp from '../text'
import LinkComp from '../link'
import { docLink, supportLink } from '../../data'

const Footer = () => {
  return (
    <footer className={`w-[90%] h-auto sm:h-[80px] flex flex-col md:flex-row justify-between items-center bg-gradientColor text-white`} >

      <TextComp className={`w-full  h-full md:w-[60%]  lg:w-[30%] text-white flex justify-evenly items-center text-center  p-4 sm:p-0 order-last md:order-first`} >© 2023 Copywrite. All rights reserved by QodeMatrix</TextComp>

      <div className={`w-auto md:w-[30%] h-full flex justify-evenly items-center text-white gap-[10px] p-4 sm:p-0`} >
        <LinkComp href={docLink} target="_blank" >
          <TextComp className={`text-white`} >Documentation</TextComp>
        </LinkComp>
        <LinkComp href={supportLink} target="_blank" >
          <TextComp className={`text-white`} >Support</TextComp>
        </LinkComp>
      </div>

    </footer>
  )
}

export default Footer

