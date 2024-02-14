/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Error from "./Error";


const  Formulario = ({pacientes, setPacientes, paciente,setPaciente})  => {
  

    const [nombre, setNombre]= useState ('');
    const [propietario, setPropietario]= useState ('');
    const [email, setEmail] = useState('') ;
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=>{

        if (Object.keys(paciente).length >0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            
        }

    }, [paciente])

   const handleSubmit = (e) => {
    e.preventDefault()

    const generarid = () => {
        const ramdom = Math.random().toString(36).substring(2);
        const fecha= Date.now(). toString(36);
        return ramdom + fecha
    }

    // VALIDAR FORMULARIO 
    if ([nombre, propietario, email,fecha, sintomas].includes ('')){
        console.log('Hay almenos un campo vacio')
        setError(true)
        return;

    } setError(false)

    //CONTRUIR OBJETO PACIENTE

    const objetoPaciente= {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        
    }

    if (paciente.id) {
    // Editando registro
    objetoPaciente.id = paciente.id
    
    const pacientesActualizados =  pacientes.map (pacienteState => pacienteState.id === 
    paciente.id ? objetoPaciente : pacienteState);

    setPacientes(pacientesActualizados)
    setPaciente({})

    } else {
    
        objetoPaciente.id = generarid()
        setPacientes([...pacientes, objetoPaciente]);
    }
    
    //reiniciar formulario

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

    
   }

   

    return(
        <div className="md:w-1/2 lg:w-2/5 ">


        <h2 className=" font-black text-2xl text-center">Seguimiento de pacientes</h2>
        <p className="mt-2 text-center mb-10">
            Añade pacientes y {""}
            <span className=" text-indigo-600 font-semibold text-lg">Administrar</span>
        </p>

        <form 
        onSubmit={ handleSubmit }
        action="" 
        className=" bg-white shadow-md rounded-xl py-10 px-5">

            {error && <Error><p>Todos los campos obligatorios</p> </Error>}

           

            <div className=" mb-5">
                <label htmlFor="Mascota" className=" block uppercase font-bold" > 
                Nombre mascota</label>

                <input 

                className=" border-2 w-full p-2 mt-1 placeholder-slate-400 rounded-md" 
                type="text" 
                id="Mascota" 
                placeholder="Nombre de la mascota" 
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)} 
                
                />

            </div>
            <div className=" mb-5">
                <label 
                htmlFor="Propietario"
                className=" block uppercase font-bold" > 
                Nombre propietario</label>
                <input
                className=" border-2 w-full p-2 mt-1 placeholder-slate-400 rounded-md" 
                type="text" 
                name="" id="Propietario" 
                placeholder="Nombre de la mascota" 
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)} 
                 />

            </div >
            <div className=" mb-5">

                <label 
                htmlFor="Email" 
                className=" block uppercase font-bold" > 
                Email</label>

                <input 
                className=" border-2 w-full p-2 mt-1 placeholder-slate-400 rounded-md" 
                type="email" 
                name="" id="Email" 
                placeholder="Email contacto propietario" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}  
                />

            </div>
            <div className=" mb-5">
                <label 
                htmlFor="Alta" 
                className=" block uppercase font-bold" > 
                Alta
                </label>
                <input 
                className=" border-2 w-full p-2 mt-1 placeholder-slate-400 rounded-md" 
                type="date" 
                name="" id="Alta" 
                value={fecha}
                onChange={(e)=> setFecha(e.target.value)} 
                />

            </div>
            <div className=" mb-5">
                <label htmlFor="sintomas" 
                className=" block uppercase font-bold" > 
                sintomas</label>
                <textarea 
                className=" border-2 w-full p-2 mt-1 placeholder-slate-400 rounded-md" 
                type="date" 
                name="" id="sintomas"
                placeholder="Describe los sintomas" 
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)} 
                />

            </div>

            <input 
            type="submit" 
            value= {paciente.id ? 'Editar paciente' : 'Agregar paciente'}
            className=" bg-indigo-500 w-full uppercase hover:fill-indigo-800 cursor-pointer font-bold p-3 rounded-lg text-white" />





        </form>


        </div>

    )
    


}

export default Formulario