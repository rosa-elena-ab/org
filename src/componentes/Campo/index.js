import { useState } from "react";
import "./Campo.css"

const Campo = (props) =>{
    const [valor,actualizarValor] = useState("");
    console.log("Datos: " + props);
    const placeholderModificado =`${props.placeholder}...`

    //Destructuracion
    const {type = "text"} = props

    console.log(type);

    const manejarCambio = (evento) =>{
        console.log("cambio",evento.target.value);
        props.actualizarValor(evento.target.value);
    }

    return <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={placeholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />

         </div>
}

export default Campo