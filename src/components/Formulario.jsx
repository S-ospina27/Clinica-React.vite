import { useEffect, useState } from "react";
import Error from "./Error";

// Generar un id unico para el registro 
const generarid=()=>{
  const random=Math.random().toString(36).substr(2);
  const fecha =Date.now().toString(36);

  return random+fecha;

}
// ----------------------------------------------


const Formulario = ({ setPacientes,pacientes,paciente,setPaciente}) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  // se utiliza para editar pa evitar que el componente se renderice hasta que este listo
  useEffect(()=>{

  if(Object.keys(paciente).length > 0){
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setFecha(paciente.fecha)
     setSintomas(paciente.sintomas)
  }
  },[paciente]);

  const hadleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);

      return;
    }
    setError(false);

    //  se realiza un objeto para que guarde las propiedades del registro
    const objPacioente ={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
     
    };
  // ------------------------------------------------------------------

  // EDITAR PACIENTE
    if (paciente.id) {
      objPacioente.id = paciente.id;
      const pacientesActualizados =pacientes.map((pacienteState=>pacienteState.id= paciente.id ?objPacioente : pacienteState))

      setPacientes(pacientesActualizados);
      setPaciente({});
      setNombre("");
      setPropietario("");
      setEmail("");
      setFecha("");
      setSintomas("");
      
    }else{

      objPacioente.id = generarid()
      setPacientes([...pacientes,objPacioente]);
    }

// _______________________________________________________________________________________

    //reiniciar formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");

    
    
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Paciente</h2>

      <p className="text-lg-mt-5 text-center">
        Anade paciente y {""}
        <span className=" text-indigo-600"> Administralos</span>
      </p>
      <br />
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={hadleSubmit}
      >
        {error && <Error mensaje="todos los campos son obligatorios"/>  }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>

          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2
              placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>

          <input
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2
              placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Email
          </label>

          <input
            type="email"
            id="Email"
            placeholder="dirección Email"
            className="border-2 w-full p-2 mt-2
              placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Alta
          </label>

          <input
            type="date"
            id="a"
            placeholder="dirección Email"
            className="border-2 w-full p-2 mt-2
              placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Sntomas
          </label>

          <textarea
            type="text"
            id="sintomas"
            placeholder="dirección Email"
            className="border-2 w-full p-2 mt-2
              placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold  hover:bg-indigo-700 cursor-pointer"
          value={paciente.id ?"Editar paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
