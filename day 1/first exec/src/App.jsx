import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import {AddNums , HelloWorld , LengthCheck} from './components/HelloWorld'
import { Box1, Box2, Box3, Box4 } from './components/Boxes'
import QuizContianer from './components/Quiz/QuizContianer'
import { Button } from './components/Button/Button'
function App() {
  const [count, setCount] = useState(0)
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!"


  return (
    <>
    <QuizContianer/>
    <Button style={{ fontWeight: 'bold' }} title='Important' />
    <Button title= 'Not Importent'/>
    
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AppleSeeds React App</h1>
      < HelloWorld data={data} line={1}/>
      < AddNums num1={number1} num2={number2}/>
      <LengthCheck str={string}/>

      <div style={{width: '60vw', height:'30vh', border: "1px solid black"}}>
        <Box1>
          <Box2>
            <Box3>
              <Box4/>
            </Box3>
          </Box2>
        </Box1>
      </div>
      <div className="card">
    
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
