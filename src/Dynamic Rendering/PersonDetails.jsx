import { useState } from "react";

function PersonDetails() {

    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [city,setCity]=useState("")


    const [details,setDetails]=useState(
        [
        {name:"malka", age:22, city:"Beitar"},
        {name:"Rut", age:20, city:"Tel Aviv"},
        {name:"Tamar", age:18, city:"Elad"}
    
    ]);
    

    const add = ()=>{     
            // let jsonData=details;
            setDetails([...details,{name:name,age:age,city:city}])
            // jsonData.push({
            //     name:name,
            //     age:age,
            //     city:city}) ; 
            // setDetails(jsonData)
    }

    

    return (
     <>
     <h2>Exe3----3</h2>
    <table border={1} style={{  margin: 'auto', width: '60%',border: '3px solid green',padding: '20px'}}>
                <thead >
                    <tr >
                        <th >name</th>
                        <th>age</th>
                        <th>city</th>

                    </tr>
                </thead>
                <tbody >
                    {
                        details.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br/><br/> 
            <h4>
                list
            </h4>
            {
            details.map((item,index) => {
                
                    <ul style={{listStyle: "circle"}} key={index}> {item.name}
                        <li>{item.age}</li>
                        <li>{item.city}</li>
                    </ul>  

               
            })   
            }
            <h3> add new data</h3>
           name:  <input type="text" onChange={(e) => {setName(e.target.value)}} />
           age:  <input type="text" onChange={(e) => {setAge( e.target.value)}}/>
          city: <input type="text" onChange={(e) => {setCity( e.target.value)}}/>


        <button  onClick={add}>Add</button>   

     </>
    )
  }
  
  export default PersonDetails