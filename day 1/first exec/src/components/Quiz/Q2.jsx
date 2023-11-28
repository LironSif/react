import React from 'react'
import {Q2Input} from './Q2Input'
import {Q2Title} from './Q2Title'

export const Q2 = (props) => {
  const {textVal ,setTextVal} = props
  return (
    <div className='q-container'>
        <Q2Title/>
        <Q2Input textVal={textVal} setTextVal={setTextVal}/>
    
        </div>
  )
}
