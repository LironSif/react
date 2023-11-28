import React from 'react'

export const Q2Input = (props) => {
  const {textVal ,setTextVal} = props
  return (
    <input value={textVal} type='text' onChange={e => setTextVal(e.target.value)} />
  )
}
