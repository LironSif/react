import { useState } from 'react'
import './App.css'
import MyNav from './components/MyNav'
import Counter from './components/Counter'
import CoinFlip from './components/CoinFlip'
import ClickSpeed from './components/ClickSpeed'
import ColorRand from './components/ColorRand'


function App() {
  const [currentApp, setCurrentApp] = useState(null)
  
  return (
    <main>
    <MyNav setCurrentApp= {setCurrentApp} currentApp={currentApp}/>
   <div className='flex-center' style={{height:'92vh'}}>
    {currentApp === 'counter' && (<Counter/>)}
    {currentApp === 'color-rendomizer' && (<ColorRand/>)}
    {currentApp === 'coin-filp' && (<CoinFlip/>)}
    {currentApp === 'click-speed' && (<ClickSpeed/>)}
    {!currentApp && (<h3>Pick a Game</h3>)}
    </div>
    </main>
  )
}

export default App
