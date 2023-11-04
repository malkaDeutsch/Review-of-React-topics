import { useState,useEffect } from "react";
import axios from "axios"
import {getUserTodos} from "./Utilis"


function DisplatTodos(props) {

    const [todos , setTodos] =useState([{}]);

    const getTodos = async ()=> {
        const resp =await getUserTodos(props.id);
        setTodos(resp.splice(0,5))
        console.log(resp)
    }

   useEffect(()=>{
    getTodos();
   },[todos])



    return (
    <>
             <ul style={{ border: "1px solid black" }}>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul> 
    </>
    )

};
export default DisplatTodos


