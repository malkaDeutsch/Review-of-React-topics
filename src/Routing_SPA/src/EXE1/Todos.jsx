import React, { useEffect, useState } from 'react'
import {getUserTodos} from '../Utilis'
import { useParams } from 'react-router-dom'

export default function Todos() {

    const [todos , setTodos] = useState([]);
    const params = useParams();

    const getTodos = async()=>{
        const response = await getUserTodos(params.id);
        setTodos(response);
    }



    useEffect(()=>{
        getTodos();
    },[])


  return (
    <>
    <h2>Todos </h2>
    {
        todos.map((todo)=>{
            
            return(
                <div style={{border:"1px solid black"}}>
                    <div><strong>Title:</strong><br/>{todo.title}</div>
                    <div><strong>Completed:</strong><br/> {todo.completed?'true':'false'}</div>
                </div>
            
            )
        })

    }
    </>
  )
}
