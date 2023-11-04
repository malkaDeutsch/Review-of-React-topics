import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../Utilis'
import { Link } from 'react-router-dom'



export default function Users() {

const [users , setUsers] = useState([]);

const getUsers = async ()=>{
    const response = await getAllUsers();
    console.log(response);
    setUsers(response);
}

useEffect(()=>{
    getUsers()
},[])


  return (
<>
   {
    users.map((user)=>{
        return <div key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </div>
    })
   }


</>


    
   
  )
}
