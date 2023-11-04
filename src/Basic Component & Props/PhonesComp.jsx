function PhonesComp(props) {

   let printToConsole= ()=>{
    console.log("mobile ",props.phones.mobile)
    console.log("home ",props.phones.home)
    console.log("fax ",props.phones.fax)
    alert("printed to conole");

   }
    return (
     <>
     <h2>Exe1----1</h2>
     mobile phone number: {props.phones.mobile}<br/>
     home phone number: {props.phones.home}<br/>
     fax phone number: {props.phones.fax}<br/>
    <button onClick={printToConsole}>print to console</button>
     </>
    )
  }
  
  export default PhonesComp