

function Paciente({paciente,setPaciente,EliminarPaciente}) {

  const{nombre,propietario,email,fecha,sintomas,id}= paciente;

  const handlerEliminar =()=>{

    const respuesta = confirm("¡Desea realmente eliminar este paciente?");

      if (respuesta) {

        EliminarPaciente(id);
        
      }

  }
  return (

         <div className="mx-5 my-10 bg-white shadow-md px-5 PY-10 rounded-xl mb-10">
          <br/>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:{''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Alta:{''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

          <div className="mb-10" >
            <button type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-r-lg"
            onClick={()=>setPaciente(paciente)} >
              Editar
            </button>
            <button type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold rounded-r-lg"
            onClick={handlerEliminar} >
              Eliminar
            </button>
          </div> 

        <br/>

     </div> 
   
  )
}

export default Paciente
