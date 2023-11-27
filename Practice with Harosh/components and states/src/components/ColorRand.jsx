import React, {useState} from 'react'

export default function ColorRand() {
  const [currColor, setCurrColor] = useState('rgb(0,0,0)')

function colorChange (){
 const newColor = `rgb(${randNum()},${randNum()},${randNum()})`
 console.log(newColor)
 setCurrColor(newColor)
}

function randNum () {
  return Math.floor(Math.random()*225)
}


  return (
    <div className='cou-div'>
      <h3>Color Randomizer</h3>
      <div style={{
        width: '400px',
        height: '400px',
        backgroundColor : currColor
      }}/>
      <button onClick={colorChange}> Change Color</button>

    </div>
  )
}
