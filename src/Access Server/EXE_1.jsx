import { useState } from "react";
import axios from "axios"

function EXE_1() {

    const [ID, setID] = useState({});
    const [email,setEmail]=useState();
    const [name,setName]=useState();
    const [showList,setShowList]=useState(false);
    const [todoList,setTodolist]=useState(([]));


    

    const  getData= async()=>{
        setTodolist(([]));
        setShowList(false)
      const resp= await axios.get(`https://jsonplaceholder.typicode.com/users/${ID}`)
      console.log( resp.data)
      setName(resp.data.name)
      setEmail(resp.data.email)               
      if(resp.data.name.slice(0, 1)==='m' ||resp.data.name.slice(0, 1)==='M')
       await displayTodo();
    }
    const displayTodo=async ()=>{
        setShowList(true)
     const resp= await (await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${ID}`)).data
     console.log(resp);
     setTodolist(resp)

    }


    return (
    <>
    imput id<input type="number" onChange={(e)=>{setID(+e.target.value)}}/><br/>
    <button  onClick={getData}>press</button><br/>
    <div style={{display:name?"block":"none"}}>
    Name: <h3>{name}</h3>
    Email: <h3>{email}</h3>
    </div>
    <div style={{display:showList?"block":"none"}}>
    <h1>list</h1>
{   todoList.map((item,index) => {
                 return(
                <ul style={{listStyle: "circle"}} key={index}> 
                    <li>{item.title}</li>
                </ul> ) 

           
        }) }  </div>
    {/* <pre>{JSON.stringify(todoList, null, 2)}</pre> */}

    </>
    )

};
export default EXE_1


