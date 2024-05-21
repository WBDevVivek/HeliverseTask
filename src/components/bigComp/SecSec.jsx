import React from 'react'
import ImageComp from '../image'
import ButtonComp from '../button'
import HeadingComp from '../heading'
import TextComp from '../text'
import { magicStick, purchaseBtnLink, rightIcon, starData, starRating } from '../../data'
import IconComp from '../icon'
import LinkComp from '../link'

const SecSec = () => {
  return (
    <section className={`flex flex-col justify-evenly items-center w-[90%] h-auto lg:h-[85vh] xl:h-[80vh] gap-[30px] xl:gap-[0px]`} >

      <HeadingComp size="md" className={`pt-4 text-HeadingColor`} >
        Trusted by thousands of users around the world
      </HeadingComp>
      {/* ------------------------------------------- */}
      <div className={` flex  flex-col sm:flex-row  justify-evenly xl:justify-between items-center w-full gap-[30px]  md:gap-[10px] xl:gap-[30px] flex-wrap`} >

        {/* -------------star individual------------------------------ */}

        {
          starData.map((val) => {
            return <StarSecPart key={val.id} val={val} />
          })
        }

        {/* ------------star individual------------------------------- */}

      </div>
      {/* ------------------------------------------- */}
      <div className={` flex  flex-col lg:flex-row w-full h-auto lg:h-[400px] xl:h-[400px]`} >

        <div className={` flex flex-col justify-center items-start h-[400px] sm:h-[320px] lg:h-full lg:w-[60%] xl:w-[65%] py-4`} >
          <div className={`w-full md:w-[75%] lg:w-[80%] h-[90%] flex flex-col justify-between items-start`} >
            <HeadingComp size="lg" className={`!leading-[50px] text-HeadingColor`} >
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </HeadingComp>
            <TextComp className={``} >
              Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
            </TextComp>
            <ButtonComp shape="round" variant="gradient" className={`flex  flex-col sm:flex-row  justify-between items-center sm:w-[300px] rounded-[15px] my-4  `} >

              <LinkComp href={purchaseBtnLink} target="_blank" >
                Purchase From Envato
              </LinkComp>
              <IconComp className={`fill-HeadingColor`} >{rightIcon}</IconComp>

            </ButtonComp>
          </div>
        </div>
        <div className={` self-center flex  justify-center items-center h-[320px] lg:h-full w-[70%] lg:w-[30%]`} >
          <ImageComp src={magicStick} className={` w-full h-full object-contain`} />
        </div>

      </div>
      {/* ------------------------------------------- */}
    </section>
  )
}

export default SecSec



const StarSecPart = ({ val }) => {
  return <div className={` min-w-[290px] max-w-[300px] max-h-[150px] flex-grow h-full flex flex-col sm: flex-col sm:flex-row justify-center items-center  gap-4`} >
    <ImageComp src={val.starImg} className={`h-[100px] mr-2`} />
    <div className={`h-[60px] flex flex-col justify-between items-center`} >

      <ImageComp src={starRating} className={``} />
      <TextComp className={``} >
        4.5 Score, 9 Reviews
      </TextComp>
    </div>

  </div>
}