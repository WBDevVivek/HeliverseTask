import React from 'react'
import HeadingComp from '../heading'
import TextComp from '../text'
import ImageComp from '../image'
import { allBrowser, applySectionData } from '../../data'

const ThirdSec = () => {
    return (
        <section className={`w-[90%] h-[1500px] lg:h-[1100px] flex flex-col justify-center items-center `} >

            <HeadingComp size="lg" className={`w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-[20%] flex justify-center items-center text-center !leading-[50px] text-HeadingColor`} >
                Apply On Any Section Or Enable For Whole Page
            </HeadingComp>

            <div className={`w-full h-auto lg:h-[60%] flex flex-col lg:flex-row justify-between items-center gap-4 pb-8`} >
                {
                    applySectionData.map((val)=>{
                        return <ApplySecPart key={val.id} val={val} />
                    })
                }
            </div>
            <div className={`border-2 border-borderColor w-full h-[20%] p-4 flex flex-col justify-evenly items-center  bg-applyOnSecColor rounded-[20px]`} >

                <HeadingComp size="md" className={`sm:w-[400px] text-center text-HeadingColor`} >
                    Supported by All Popular Browsers
                </HeadingComp>
                <TextComp className={`sm:w-[400px] text-center`} >
                    Rest assured, Motion Art is designed to be compatible with all major web browsers.
                </TextComp>

                <div className={`w-[300px] sm:w-[400px]`} >
                    <ImageComp src={allBrowser} className={`  `} />
                </div>

            </div>

        </section>
    )
}

export default ThirdSec




const ApplySecPart = ({ val }) => {
    return <div className={`border-2 border-borderColor w-full sm:w-[70%] lg:w-[50%] h-[80%] py-8 px-[5%] flex flex-col justify-between items-start rounded-[20px] gap-4 bg-applyOnSecColor ${val.align}`} >

        <HeadingComp size="md" className={` text-HeadingColor`} >
            {val.heading}
        </HeadingComp>
        <TextComp className={``} >
            {val.para}
        </TextComp>

        <div className={`w-[100%] h-[70%]`} >
            <ImageComp src={val.img} className={`w-full h-full`} />
        </div>

    </div>
}