import React from 'react'
import { Q1Title } from './Q1Title'
import {Q1Input} from './Q1Input'

export const Q1 = (props) => {
  const {rangeVal, setRangeVal} = props
  
  return (
    <div className='q-container' >
        <Q1Title/>
        <Q1Input  rangeVal={rangeVal} setRangeVal={setRangeVal}/>
    </div>
  )
}
