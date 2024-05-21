import React from 'react'
import HeadingComp from '../heading'
import TextComp from '../text'

const FirstSec = () => {
    return (
        <section className={` w-[90%] h-full md:h-[80vh] sm:max-h-[500px]  flex flex-col md:flex-row justify-between items-start gap-[20px] md:gap-[0px]  py-4 sm:py-0`} >
            <div className={`w-full md:w-[50%] lg:w-[30%] md:h-[80%] max-h-[400px] flex justify-start md:justify-start items-start`} >
                {/* leftSection------------------ */}

                <div className={` w-[60%] md:w-[80%] flex flex-col gap-[10px] items-start`} >
                    <HeadingComp size="md" className={`md:w-[60%] bg-gradientColor text-transparent bg-clip-text`} >Transform Your Website</HeadingComp>
                    <TextComp className={` md:w-[70%] text-[20px] text-HeadingColor`} >
                        With Motion Art Effect
                    </TextComp>
                </div>
            </div>

            <div className={` h-auto  md:h-[80%] sm:max-h-[400px] w-auto flex justify-start items-start`} >
                {/* rightSection------------------ */}

                <div className={`w-full md:w-[70%] lg:w-[60%]  xl:w-[50%] h-full flex flex-col xl:justify-between items-start pb-8`} >
                    <HeadingComp size="3xl" className={`leading-tight text-HeadingColor`} >
                        Attract Your Visitors Attention With Colorful
                    </HeadingComp>

                    <HeadingComp size="2xl" className={`py-4 bg-gradientColor text-transparent bg-clip-text`} >
                        Motion Art Effect
                    </HeadingComp>

                    <TextComp className={`leading-normal`} >
                        Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
                    </TextComp>

                </div>

            </div>
            {/* rightSection------------------ */}

        </section>
    )
}

export default FirstSec