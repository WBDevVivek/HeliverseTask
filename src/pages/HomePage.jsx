import React from 'react'
import FirstSec from '../components/bigComp/FirstSec'
import SecSec from '../components/bigComp/SecSec'
import ThirdSec from '../components/bigComp/ThirdSec'
import FouthSec from '../components/bigComp/FouthSec'

const HomePage = () => {
  return (
    <section className={` w-full h-auto flex flex-col justify-center items-center`} >

      <FirstSec/>
      <SecSec/>
      <ThirdSec/>
      <FouthSec/>

    </section>
  )
}

export default HomePage