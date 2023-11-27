import { useState } from 'react'
import '../App.css'



export default function MyNav(props) {
const{setCurrentApp, currentApp} = props

function clicked (e) {
    const val = e.currentTarget.getAttribute('name')
    setCurrentApp(val)
    console.log(val)
    
}

  const menuOptions = [
    ['counter', 'Counter'],
    ['color-randomizer', 'Color Randomizer'],
    ['click-speed', 'Click Speed'],
    ['coin-flip', 'Coin Flip']
  ];
  



  return (
  <nav className='my-nav'>
    {menuOptions.map((el, i) =>(
      <div key={i} className='flex-center' style={{border: currentApp===el[0]?'3px solid red':'2px solid white'}} name={el[0]} onClick={clicked}>{el[1]}</div>
    ))}
    {/* <div className='flex-center ,co'style={{border: currentApp==='counter'?'3px solid red':'2px solid white'}} name='counter' onClick={clicked}>counter</div>
    <div className='flex-center' name='color-rendomizer' onClick={clicked} >color rendomizer</div>
    <div className='flex-center' name='click-speed' onClick={clicked}>clilk speed</div>
    <div className='flex-center' name='coin-filp' onClick={clicked}>coin filp</div> */}
  </nav>
    )
}

