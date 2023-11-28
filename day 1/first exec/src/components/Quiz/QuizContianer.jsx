import React ,{useState} from 'react'
import QuizTitle from './QuizTitle'
import {Q1} from './Q1'
import {Q2} from './Q2'

const QuizContianer = () => {
const [rangeVal, setRangeVal] = useState(1)
const [textVal, setTextVal] = useState('')

const handleSubmit = () => {

    if(textVal === ''){
        alert('what the Fuck bro ??')
        return
    }

    const datas = {q1answer:rangeVal, q2answer:textVal}
    console.log(datas)
}

  return (
    <div className='quizContainer'>
        <QuizTitle/>
        <Q1 rangeVal={rangeVal} setRangeVal={setRangeVal}/>
        <Q2 textVal={textVal} setTextVal={setTextVal}/>
        <button onClick={handleSubmit} >Submit</button>

    </div>
  )
}

export default QuizContianer