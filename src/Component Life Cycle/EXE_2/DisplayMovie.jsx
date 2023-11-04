import { useState,useEffect } from "react";
import axios from "axios"


function DisplayMovie(props) {





    return (
    <>
    <div style={{border:"10px solid"}}>
   name:{props.data.name}<br/><br/>
    </div>
    </>
    )

};
export default DisplayMovie


