import React from 'react'
import {InfoSection, Pricing} from '../../components'
import {homeObjTwo, homeObjThree} from "./Data" 

const Products = () => {
    return (
        <>
          <InfoSection {...homeObjTwo} />
          <InfoSection {...homeObjThree} />
          <Pricing/>
        </>
    )
}

export default Products
