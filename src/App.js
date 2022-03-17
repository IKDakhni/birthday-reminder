import React from "react";
import{useState}from "react";
import {data} from "./Birthday";

function App(){
  const[people,setPeople]=useState(data)
  const removeperson=(id)=>
  {
    let newPerson=people.filter((person)=>person.id!==id)
    setPeople(newPerson)
  }
  return (
    <>
    <h3 style={{backgroundColor:"cyan",
  color:"blue",
  textAlign:"left",
  fontSize:"30px",
  marginTop:"70px"}}>{people.length}BIRTHDAYS TODAY</h3>
  {people.map((person)=>{
    const {id,name,image}=person
    return(
      <>
      <div className="container" key={id}>
        <div className="avatar">
        <img src={image} alt={name}/>
        </div>
        <div className="button">
          <button className="btn" onClick={()=>removeperson(id)}>DISMISS
          </button>
          </div>
        </div>
        </>
    )
  })
  }
    </>
  );
}
export default App;