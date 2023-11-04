import { useState, useEffect } from "react";


function Show(props) {

    return (
        <>
            <div ><img src={props.pic} style={{ width: '600px', height: '440px' }}></img>
                <h2>{props.name}</h2>
                
            </div>

        </>
    )

};
export default Show

