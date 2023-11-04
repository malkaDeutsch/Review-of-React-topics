import { useState } from "react";
import Select from 'react-select'
import Show from "./show";



function SelectMovie() {

    const [movie, setMovie] = useState()
    const [pic, setPic] = useState()


    const [selectedOption, setSelectedOption] = useState([
        {
            value: 0, label: "London", pic:
                "https://a.cdn-hotels.com/gdcs/production29/d1870/6a5ec560-bb25-11e8-970b-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        },
        {
            value: 1, label: "Paris", pic:
                "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
        },
        {
            value: 2, label: "Jerusalem", pic:
                "https://www.jmberlin.de/sites/default/files/jerusalem-keyvisual-neu.jpg"
        }]);


        
    const handleChange = (e) => {
     
        setMovie(e.value);
        setPic(selectedOption[e.value].pic)
        console.log(pic)
    };


    return (
        <>
            <label id="select"><h3>select a country</h3></label>
            <Select id="select" options={selectedOption} onChange={handleChange} />
            <Show id={movie}pic={pic}></Show>
        </>
    )




};
export default SelectMovie

