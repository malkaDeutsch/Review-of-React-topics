import { useState, useEffect } from "react";
import Select from 'react-select'
import Child from "./Child";


function Parent() {
    const [dataFromChild, setDataFromChild] = useState([
        {name:"Avi",age:13,isAdoult:false},
    ]);


    


    return (
    <>
<h2>Person List</h2>
    <div style={{backgroundColor: "yellow"}}>
        <ul>
      {  dataFromChild.map((p, index)=> {
      return( 
        <li key={index}> <h2>{p.name} is {p.age} years old, and he/she {p.isAdoult?"is":"is not"} an adoult</h2></li>
            )
        })}
      </ul></div>
      <Child callback={(name,age,isAdoult) => setDataFromChild([...dataFromChild,{name:name,age:age,isAdoult:isAdoult}])} />
    

    </>
    )

};
export default Parent


