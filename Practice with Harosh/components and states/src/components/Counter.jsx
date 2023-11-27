import React , {useState } from 'react'



export default function Counter() {
const [count, setCount] = useState(0)

function inc() {
  setCount(p=>p+1)
}

function dec() {
  setCount(p=>p-1)
}


  return (
    <div className='cou-div'>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>


      </div>
  )
}
