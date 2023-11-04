import { useState } from "react";


function Child(props) {

   
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [isAdoult, setIsadoult] = useState()


    return (
    <>
    <div style={{backgroundColor:"gray"}}>
    <label>name:</label><br />
    <input type="text"  onChange={(e) => {setName(e.target.value)}}  required/><br />
    <label>age:</label><br />
    <input type="number" onChange={(e) => {setAge(+e.target.value)}}required="true"/><br />
    is adult: <input type="checkbox" onChange={(e) => {setIsadoult(e.target.checked)}} /><br />
            <button onClick={() => props.callback(name,age,isAdoult)}>Add</button></div>


    </>
    )

};
export default Child


