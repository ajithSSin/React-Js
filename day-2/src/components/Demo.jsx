import React from 'react'

const Demo = () => {
    const name="Ram"//1.display name
    
    const x=100;//2.to display sum(arithmetic operation)
    const y=200;
    
    const names=["priya","lekshmi","rajni"]//3.to display array of names
    
    const Passed=true;//4. boolean 

  return (
    <>
    <div className="text-xl bg-red-800">
            Demo App-my demo page
    </div>
    <p>
        Hello {name}
    </p>
    <p>
        The {x} and {y} adds to {x+y}
    </p>
    <ul>
        {names.map((name,index)=>(
            <li key={index}> 
            {name}</li>
        ))}
    </ul>

    {/**using ternary operation:  */}
        {Passed? <h1>You have passed</h1>:<h1>Not Passed</h1>}
    </>    
  )
}

export default Demo