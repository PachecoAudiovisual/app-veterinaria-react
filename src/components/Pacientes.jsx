/* eslint-disable react/prop-types */


const Pacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id } = pacientes

    const handleEliminar = () => {
        const respuesta= confirm('Desceas eliminar este paciente')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
  
  return (
        <div className="m-3 bg-white shadow-md px-5 rounded-xl pt-10">

        <p className=" font-bold uppercase text-gray-700 mb-3 ">Nombre:
        <span className=" font-normal  normal-case">{nombre} </span>
        </p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Propietario:
            <span className=" font-normal  normal-case">{propietario}</span>
        </p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Email:
            <span className=" font-normal  normal-case">{email}</span>
        </p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Fecha Alta:
            <span className=" font-normal  normal-case">{fecha}</span>
        </p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Sintomas:
            <span className=" font-normal  normal-case">{sintomas}</span>
        </p>

        <div className=" flex justify-around">
             <button
             type="button"
             className=" py-2 px-5 m-2 bg-indigo-500 hover:bg-indigo-700 text-white"
             onClick={() => setPaciente(pacientes)}>
                Editar
             </button>
             <button
             type="button"
             className=" py-2 px-5 m-2 bg-red-500 hover:bg-red-700   text-white"
             onClick={handleEliminar}
             >
                Elimina
             </button>
        </div>


    </div>
  )
}

export default Pacientes
