import React, { useState } from 'react'

function Count() {
    const[count, takeCount] = useState(0);//count -variable takeCount -update variable
    const increment = () => {
        takeCount(count + 1);//1+2+3+...
    }
    const decrement = () => {
        takeCount(count - 1);//-1-2-3-..
    }
    const reset = () => {
        takeCount(0);//everything 0
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}disabled={count === 0}>decrement</button>
         <button onClick={reset}disabled={count===0}>Reset</button>
    </div>
  )
}

export default Count