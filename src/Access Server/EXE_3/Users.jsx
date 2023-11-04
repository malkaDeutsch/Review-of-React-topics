import { useState } from "react";
import axios from "axios"
import User from "./User";

function Users() {

    const [users,setUsers]=useState([]);


    const getData=async ()=>{
        const resp= await axios.get(`https://jsonplaceholder.typicode.com/users`)
        console.log( resp.data)
        setUsers(resp.data)
  
    }


    return (
    <>
    <button onClick={getData}>Get data</button><br/>

    {
    users.map((userData,index)=>{
        return( 
               <User data={userData}/>     
              ) 
            })
    }
    
    </>
    )

};
export default Users


