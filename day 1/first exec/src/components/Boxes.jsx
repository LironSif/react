import { Children } from "react"
const flex = {display: 'flex', flexGrow:"1" , height :"100%" , padding: "5px"}

export function Box1 () {
    return (
        <div style={{...flex,backgroundColor: 'green'}}>
              <Box2/>
        </div>
    )
}

export function Box2 () {
    return (
        <div style={{...flex,backgroundColor: 'blue'}}>
             <Box3/>
             
        </div>
    )
}

export function Box3 () {
    return (
        <div style={{...flex,backgroundColor: 'pink'}}>
            <Box4/>
            <Box4/>
        </div>
    )
}

export function Box4 () {
    return (
        <div style={{...flex,backgroundColor: 'purple'}}>
           
        </div>
    )
}

