import { useState } from "react";
function Total() {


    const [sum, setSum] = useState(0);
    const [val, setVal] = useState(0);

    const add=(e)=>{
        setSum(sum +val);
        setVal(0)
    }
    const setValue=(e)=>{
        setVal(+e.target.value);
    }
    return (
     <>
     <h2>Exe2----2</h2>
    <input type="text" placeholder="input a number " onChange={(e) => { if (+e.target.value) setVal(+e.target.value) }} value={val}></input><br/><br/>
    <button onClick={add}>+</button><br/><br/>
    sum : <span>{sum}</span>

     </>
    )
  }
  
  export default Total