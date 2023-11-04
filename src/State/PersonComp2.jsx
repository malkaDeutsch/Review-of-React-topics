import { useState } from "react";
function PersonComp2() {


    const [age, setAge] = useState("18");
    const [name, setName] = useState("Malka");
    const swap=()=>{
        setAge(name);
        setName(age);
    }
    return (
     <>
     <h2>Exe2----1</h2>
    Name: <span>{name}</span><br/>
    Age: <span>{age}</span><br/><br/>
    <button onClick={swap}>Swap</button>

     </>
    )
  }
  
  export default PersonComp2