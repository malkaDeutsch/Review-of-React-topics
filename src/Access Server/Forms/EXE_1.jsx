import { useState } from "react";
import axios from "axios"
import {getOneUser,updateUser } from "./Utilis"

function EXE_1(props) {
    const [ID, setID] = useState();
    const [user,setUser]=useState({});
   

    const handleSubmit=(e)=>{
    e.preventDefault();
    const res=updateUser(ID,user);
    console.log(res);
    }

    const getData=async ()=>{
    const data = await getOneUser(ID);
    console.log(data)
    setUser(data)
   
   }


    return (
    <>
    imput id: <input type="number" onChange={(e)=>setID(+e.target.value)}/><br/>
    <button  onClick={getData}>click</button><br></br> 

    <form  onSubmit={handleSubmit}>
    Name : <input onChange={e => setUser({ ...user, name: e.target.value })} value={user.name} type="text" /> <br />
    Email: <input onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} type="text" /> <br />
    <button>Update</button>
    </form>
    </>
    )

};
export default EXE_1


