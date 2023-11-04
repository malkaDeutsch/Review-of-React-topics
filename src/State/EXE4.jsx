import { useState } from "react";

function EXE4() {
    
    const [check,setCheck]=useState(false);
    
    return (
     <>
     <h2>Exe2----4</h2>
        status: <input type="checkbox"  checked={check} /><br/>
        <input type="radio" id="check" name="c" value="check" onChange={()=>{setCheck(true)}}/>
        <label for="check">check</label><br/>
        <input type="radio" id="uncheck" name="c" value="uncheck" onChange={()=>{setCheck(false) }}/>
        <label for="uncheck">uncheck</label><br/>
    
     </>
    )
  }
  
  export default EXE4