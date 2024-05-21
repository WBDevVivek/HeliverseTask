import React from 'react'
import HeadingComp from '../heading'
import TextComp from '../text'
import ImageComp from '../image'
import { plugInData } from '../../data'

const FouthSec = () => {
    return (
        <section className={`w-[90%]  lg:h-[100vh]  lg:max-h-[600px] flex flex-col justify-between items-center py-8`} >

            <HeadingComp size="lg" className={`w-[70%] xl:w-[40%] text-center !leading-[50px] text-HeadingColor`} >
                An All-Round Plugin With Powerful Features
            </HeadingComp>
            <TextComp className={`w-[70%] xl:w-[40%] text-center pb-8  lg:pb-0`} >
                Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
            </TextComp>

            <div className={`w-full flex flex-col sm:flex-row justify-evenly lg:justify-between items-center gap-8 flex-wrap lg:flex-nowrap`} >

                {
                    plugInData.map((val) => {
                        return <PlugInSecPart key={val.id} val={val} />
                    })
                }
            </div>
        </section>
    )
}

export default FouthSec



const PlugInSecPart = ({ val }) => {
    return <div className={`border-2 border-borderColor  flex-grow max-w-[300px] lg:max-w-full h-[300px] flex flex-col justify-evenly items-start  bg-applyOnSecColor rounded-[10px]  p-4`} >

        <div className={` w-[150px] h-[150px]`} >
            <ImageComp src={val.plugInImg} className={``} />
        </div>
        <HeadingComp size="md" className={` text-HeadingColor`} >
            {val.plugInHeading}
        </HeadingComp>
        <TextComp className={``} >
            {val.plugInPara}
        </TextComp>
    </div>
}