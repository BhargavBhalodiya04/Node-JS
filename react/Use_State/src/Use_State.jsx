import React from 'react'
import { useState } from 'react';


const Use_State = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount (count + 1)
    }
    const handleDec = () => {
        setCount (count - 1)
    }
    const handleRest = () => {
        setCount (0)
    }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={handleClick} style = {{marginRight: "0.5rem"}}>Obama</button>
        <button onClick={handleDec} style = {{marginRight: "0.5rem"}}>Decrease</button>
        <button onClick={handleRest} style = {{marginRight: "0.5rem"}}>Reset</button>
    </>
  )
}

export default Use_State
