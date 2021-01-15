import React from 'react'
import {InfoSection, Pricing} from '../../components'
import {homeObjThree, homeObjFour} from "./Data" 

const SignUp = () => {
    return (
        <>
          <InfoSection {...homeObjThree} />
          <Pricing/>
          <InfoSection {...homeObjFour} />
        </>
    )
}

export default SignUp
