// import { useState, useEffect } from "react";
// import Select from 'react-select'


// function Chaild() {

//     const [name, setName] = useState()
//     const [age, setAge] = useState()
//     const [cityChoose, setCityChoose] = useState()
//     const [city, setCity] = useState()
//     const [isadult, setIsadult] = useState()


//     const [data, setData] = useState([]);


//     const [cities, setCities] = useState([]);

// //     const handleChange = () => {
// //         var jsonArr = [];
// //         data.map((d)=>{
// //                     console.log("jsonArrMap",jsonArr)

// //             jsonArr.push({
// //                 value: d._id,
// //                 labal: d.שם_ישוב
// //         });  
// //         })
// //         console.log("jsonArr",jsonArr)
// //         setCities(jsonArr);

     
    
// // }
    

//     const sendData = () => {

//     }

//     async function getCitiesList(){
//         // try{
//         //     const response = await fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&q=&limit=32")
//         //     .then(response => response.json())
//         //     .then(json => setData(json))
//         //     console.log(jsonData);

//         //     var jsonArr = [];
//         //     data.map((d)=>{
//         //                 console.log("jsonArrMap",jsonArr)
    
//         //         jsonArr.push({
//         //             value: d._id,
//         //             labal: d.שם_ישוב
//         //     });  
//         //     })
//         //     console.log("jsonArr",jsonArr)
//         //     setCities(jsonArr);
//         // }
//         // catch{
//         // }
        
//         }
        

//     useEffect(() => {
//         getCitiesList();
//         // handleChange();
//     }, []);

//     return (
//         <>
//             <label>name:</label><br />
//             <input type="text"  onChange={(e) => {setName(e.target.value)}}/><br />
//             <label>age:</label><br />
//             <input type="text" onChange={(e) => {setAge(e.target.value)}}/><br />
//             select a city: <Select  options={cities} onChange={(e) => {setCityChoose(e.value)}} />
//             is adult: <input type="checkbox" onChange={(e) => {setIsadult(e.target.checked)}}/><br />
//             <button onClick={sendData}>Add</button>
//             <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
//     </div>

//         </>
//     )

// };
// export default Chaild


