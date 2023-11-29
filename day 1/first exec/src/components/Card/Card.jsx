import React from 'react'


export const Card = ({title, description, eman}) => {
  return (
    <div className='main-card'>
        <img src={eman} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <button className='btn'>share</button>
        <button className='btn'>explore</button>
   

    </div>
  )
}
