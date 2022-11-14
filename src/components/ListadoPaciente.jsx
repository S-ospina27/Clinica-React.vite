import Paciente from "./Paciente"

function ListadoPaciente({pacientes,setPaciente ,EliminarPaciente}) {
  return (
    <div className="w-1/2 lg:w-3/5 md:h-screen h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado paciente</h2>
      <p className=" text-lx mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        
      </p>
 
      {pacientes.map(paciente=>{

          return <Paciente 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente} 
          EliminarPaciente={EliminarPaciente}
        />

        })}
    </div>
  )
}

export default ListadoPaciente
