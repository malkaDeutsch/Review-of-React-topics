import { useState } from "react";
import axios from "axios"
import Users from "./Users";
import {getUserTodos} from "./Utilis"

function User(props) {
    const [isExist, setisExist] = useState(false);
    const [user,setUser]=useState(props.data);
    const [todos,setTodos]=useState([{}]);

   
    const handelClick=async ()=>{
        const resp=await getUserTodos(user.id);
        console.log(resp)
        setTodos(resp.splice(0,3))
      setisExist(!isExist)

   }



    return (
    <>
    <br/>
    <body style={{border:"10px solid blue"}}>
    ID: <h3 style={{fontFamily:"cursive",fontSize:"20px"}}>{user.id}</h3><br/>
    Name: <h3>{user.name}</h3><br/>
    Email: <h3>{user.email}</h3><br/>
    <button onClick={handelClick}>Tasks</button><br/>

    { isExist?  <ul style={{ border: "1px solid black" }}>
         {todos.map((todo,index) => <li key={index}>{todo.title}</li>)}
        </ul>:null }
  </body>
    </>
    )

};
export default User


