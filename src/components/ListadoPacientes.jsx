/* eslint-disable react/prop-types */

import Pacientes from "./Pacientes"



const  ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente})  => {

 

    return (

        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-auto">
            { pacientes && pacientes.length ? (

                    <>
                        <h2 className="font-black text-2xl text-center pt-5 md:pt-0">Listado pacientes</h2>
                        <p className="mt-2 text-center mb-10">Administra tus {''}
                        <span className=" text-indigo-600 font-semibold text-lg">Pascientes y citas</span>

                        </p>

                        { pacientes.map((pacientes) => {
                            return (
                                <Pacientes
                                key = {pacientes.id}
                                pacientes={pacientes}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}/>
                            )

                        }
                        )}
                    </>

                ) : (
                    
                    <>
                    <h2 className="font-black text-2xl text-center pt-5 md:pt-0">No hay pacientes</h2>
                        <p className="mt-2 text-center mb-10">Comienza agregando  {''}
                        <span className=" text-indigo-600 font-semibold text-lg"> pacientes</span>

                        </p>
                    
                    </>

                )
            }





       
          
     

        
      
       
        </div>

    )
    


}

export default ListadoPacientes