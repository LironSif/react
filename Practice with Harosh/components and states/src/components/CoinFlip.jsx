import React, {useState } from 'react'
import heads from '../assets/heads.png';
import tails from '../assets/tails.png';

export default function CoinFlip() {
  const [coin, setCoin] = useState(true)


  function ranNam () {
    let randNum = Math.random()
    if(randNum < 0.5) {
      setCoin(true)
      console.log('coin is true')
    } else {
      setCoin(false)
      console.log('coin is true')
    }
  }

  return (
    <div className='cou-div'>
      <h3>Flip a Coin</h3>
      <h2>{coin? 'heads': 'tails'}</h2>
      <img src={coin?heads:tails}></img>
      <div>
        <button onClick={ranNam}>Flip</button>
      </div>

    </div>
  )
}
