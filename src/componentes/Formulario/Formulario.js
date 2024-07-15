import { useState} from "react"
import "./Formulario.css"
import Campo from "../Campo/index.js"
import ListaOpciones from "../ListaOpciones/index.js"
import Boton from "../Boton/index.js"

const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo,actualizarTitulo] = useState("");
    const [color,actualizarColor] = useState("");

    const{registrarColaborador, crearEquipo}=props;

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar el envio");
        let datosAEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto, 
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellene el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto"     
                placeholder="Ingresar puesto" 
                required={true}
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required={true}
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellene el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color"     
                placeholder="Ingresar el color en Hex" 
                required={true}
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>

    </section>
}

export default Formulario