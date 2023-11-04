import { useState,useEffect } from "react";
import axios from "axios"
import DisplayMovie from "./DisplayMovie";


function EXE_2() {

    const [movies,setMovies] =useState([{}]);
    const showData=async ()=>{
        const response = await axios.get("http://localhost:8000/shows")
        console.log(response.data .splice(0, 10));
        setMovies(response.data .splice(0, 10))

       }

    useEffect(() => {
        showData();
    }, [])



    return (
    <>
    <div style={{border:"10px solid red"}}>
    <strong>Movies</strong>
        {
            
            movies.map((m,index)=>{
                return( 
                    <DisplayMovie data={m} key={index}/>    
                   ) 
              
            })
        }
        </div>
    </>
    )

};
export default EXE_2


