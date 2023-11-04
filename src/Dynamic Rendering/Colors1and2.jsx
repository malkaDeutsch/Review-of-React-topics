import { useState } from "react";

function Colors1and2() {

   const [color, setColor] = useState("blue");

   const [colorArr, setColorArr] = useState([]);


   const setColorList = (e) => {
      const { value, checked } = e.target;
      if (checked) {
         setColorArr((prevSelectedColors) => [...prevSelectedColors, value]);
      } else {
         setColorArr((prevSelectedColors) =>
            prevSelectedColors.filter((color) => color !== value)
         );
      }
   }





   return (
      <>
         <h2>Exe3----1</h2>
         <label>input sum text: </label><br />
         <input type="text" style={{ background: color }} onKeyDown={(e) => {
            (e.target.value.length) < 5 ? setColor("blue") : setColor("red");
         }
         }></input>
         <br />
         <h2>Exe3----2</h2>
         Red: <input type="checkbox" value='red' onChange={(e) => { setColorList(e) }} /><br />
         Blue: <input type="checkbox" value='blue' onChange={(e) => { setColorList(e) }} /><br />
         Green: <input type="checkbox" value='green' onChange={(e) => { setColorList(e) }} /><br />
         {

            colorArr.map((item, index) => {
               return (
                  <ul>
                     <li key={index}><div style={{ backgroundColor: item }} >{item}</div></li>
                  </ul>
               )
            })
         }


      </>
   )
}

export default Colors1and2