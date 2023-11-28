import React, { useState }  from 'react'

export const Q1Input = (props) => {
  const {rangeVal, setRangeVal} = props

  return (
    <>
      <input value={rangeVal} max='10' min='1' type='range' onChange={e =>
         {setRangeVal(e.target.value) 
         console.log(e.target) }}/> 
        <div>
          {rangeVal}

    </div>
    </>
  )
}
