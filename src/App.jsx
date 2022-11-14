import { useState ,useEffect} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";

function App() {

  // desde aqui nos permite pasar los datos del formulario a todos los otros componentes 
  const[pacientes,setPacientes]= useState([]);

  // este se hizo para registrar a diferencia del de arriba que recibe un array este resibe solo un objeto
  const[paciente,setPaciente]= useState({});

  useEffect(() => {
      const obtenerLS = ()=>{
        const pacienteLS =JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacienteLS);
      }
  obtenerLS();
  }, []);



  useEffect(() => {
    
   localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])
  // Elliminar pacientes 
  const EliminarPaciente = ((id)=>{
    const pacienteActualizado= pacientes.filter(paciente=> paciente.id !== id);
    setPacientes(pacienteActualizado);
  })

  return (
   <div className="container mx-auto mt-5">
     <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes= {pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />

        <ListadoPaciente
        pacientes= {pacientes}
        setPaciente={setPaciente}
        EliminarPaciente={EliminarPaciente}
         />
     </div>
   </div>
  );
}

export default App;
