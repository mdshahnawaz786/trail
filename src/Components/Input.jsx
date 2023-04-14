import React, { useState } from 'react'
import myStore from '../Redux/Store'



const Input = () => {
    const [state, setstate] = useState("")
  return (
    <div>
        <h2>Input Component</h2>
        <input type="text" onChange={((e)=>{
            setstate(e.target.value)
        })} />
        <button onClick={(()=>{
            myStore.dispatch({
                type:"name",
                username:state
            })
        })}>submit</button>
    </div>
  )
}

export default Input