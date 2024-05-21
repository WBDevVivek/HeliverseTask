import React from 'react'
import { MotionArtEffect_logo, purchaseBtnLink } from '../../data'
import ImageComp from '../image'
import ButtonComp from '../button'
import LinkComp from '../link'

const Header = () => {
    return (
        <header className={` border-5 border-red-900 w-[90%] h-auto sm:h-[100px] flex flex-col sm:flex-row justify-between items-center gap-4 py-4 sm:py-0`} >

            <div className={` sm:w-[20%] min-w-[100px] sm:min-w-[200px]`} >
                <LinkComp href={"/"}>
                    <ImageComp src={MotionArtEffect_logo} className={`w-full h-full object-cover`} />
                </LinkComp>
            </div>

            <ButtonComp
                className={` sm:w-[20%] min-w-[100px] sm:min-w-[200px]`}
                shape="round"
                variant="fill"
            >
                <LinkComp href={purchaseBtnLink} target="_blank" >
                    Purchase Now
                </LinkComp>
            </ButtonComp>

        </header>
    )
}

export default Header