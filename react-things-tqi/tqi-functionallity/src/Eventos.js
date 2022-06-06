import React from "react";
import Button from "./Button";

const  Eventos = () => {
const name = 'Digital Innovation One'

const showEvent = (e) => {
alert(name)
}



const handleChange = (e) => {
 const {value} = e.target
 console.log(value)
}

return (
    <div>
        <input onChange={handleChange} placeholder="digite um valor"></input>
         <Button onClick={(e) => showEvent(e)}>Mostrar o nome</Button>
    </div>
)

}




export default Eventos;