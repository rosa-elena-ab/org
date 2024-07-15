import "./MiOrg.css"
import { useState } from "react"

const MiOrg= (props)=> {
    console.log(props);
    //Estado - hooks
    //useState
    // const[nombreVariable,funcionActualiza] = useState(valorInicial);
   // const [nombre,actualizarNombre] = useState("Harland");
   // const [mostrar,actualizarMostrar] = useState(true);

    //const manejarClick = () => {
    //   console.log("Mostrar/ocultar elemento", mostrar);
    //   actualizarMostrar(!mostrar);

   // }
    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>

}
export default MiOrg