import React, {useState} from 'react'

export default function ClickSpeed() {
const [score, setScore] = useState(0)
const [highScore, setHighScore] = useState(0)
const [gameOn, setGameOn] = useState(false)
const [timer, setTimer] = useState(5)

function gameClick () {
  setScore(score + 1)
}
function startGame() {
  if (!gameOn) {
    setGameOn(true);
    setTimer(5); // Initialize the timer for the new game
  }

  // Capture the current score before starting the timer
  const currentScore = score;

  const myTimer = setInterval(() => {
    setTimer(prevTimer => {
      if (prevTimer === 1) {
        clearInterval(myTimer);
        setGameOn(false);

        // Use the captured score for comparison
        if (highScore < currentScore) {
          setHighScore(currentScore);
        }
        setScore(0);
        return 0; // Reset timer to 0 when the time is up
      } else {
        return prevTimer - 1;
      }
    });
  }, 1000);
}




  return (
    <div className='cou-div'>
      <h3>Click Speed Challange</h3>
      <h5>{`High Score: ${highScore}`}</h5>
      <div className='flex-center' style={{
        width:'400px',
        height:'400px',
        backgroundColor:'white',
        borderRadius:'50%'
      }} onClick={()=> gameOn?gameClick():startGame()}>
        <h3>{gameOn?'click fast':'click to start'}</h3>
        {gameOn?<h4>{score}</h4>:null}
        {gameOn?<h4>{timer}</h4>:null}
      </div>

    </div>
  )
}
