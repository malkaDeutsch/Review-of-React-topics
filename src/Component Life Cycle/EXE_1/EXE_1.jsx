import { useState,useEffect } from "react";
import DisplatTodos from "./DisplatTodos";


function EXE_1() {

    const [ID , setID]=useState(0);
   
    return (
    <>
    input ID: <input type="number" onChange={(e)=>{setID(+e.target.value)}}/>
    <DisplatTodos  id={ID}/>
    </>
    )

};
export default EXE_1


