h3 
 
 export  function HelloWorld(params) {
    // const data  = ["hello", "world"];
    const {line, data} = params
   
    const [first, second] = data
    console.log(line)
    return (
        <h3>
            {`${first[0].toUpperCase()+ first.slice(1)} ${second[0].toUpperCase() + second.slice(1)}`}
        </h3>
    )
}



export function AddNums ({num1, num2}){
    console.log(num1)
    console.log(num2)

    return (
        <h3> 
            {`${num1} + ${num2} = ${num1 + num2} `}
        </h3>
    )
}

export function LengthCheck ({str}) {
    console.log(str.length)
    return(
        <h3>
            {`this string length is ${str.length}`}
          
        </h3>
    )
}