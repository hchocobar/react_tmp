import React, { useState, useEffect} from "react";

function Counter2() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCount(c => c + step);
      }, 1000);
      return () => clearInterval(id);
    }, [step]);
  
    return (
      <>
        <h1>{count} - con saltos de: {step}</h1>
        <lebel>Step / Salto: </lebel>
        <input value={step} onChange={e => setStep(Number(e.target.value))} />
      </>
    );
  }

  export default Counter2;