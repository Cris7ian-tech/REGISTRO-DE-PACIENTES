import { useState } from "react";



const FormularioPacientes = () => {

  //capturar el formulario
  const estadoInicial = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    edad: "",
    diagnostico: "",
    pais: ""
  }

  //estado inicial: vacio
  const {paciente, setPaciente} = useState(estadoInicial)
  
  //funcion para capturar inputs.
  const capturarInputs = (e) => {
    const {name, value} = e.target;
    setPaciente({...paciente, [name]: value})
  }

  const guardarDatos = async (e) => {
    e.preventDefault();
    console.log(paciente)
    setPaciente(...estadoInicial)
  }




  return (
  <div className="container">
    <h2>Formulario de Pacientes</h2>

    <button className="btn btn-primary">Cerrar Secion</button>
    
    <hr />
    <div className="row">

      {/* seccion para form       */}

      <div className="col-md-4">

        <h3 className="text-center mb-3">Ingresar Pacientes</h3>

    <form onSubmit={guardarDatos}>
      
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" onChange={capturarInputs} value={paciente.nombre} />



      <label htmlFor="apellido">Apellido</label>
      <input type="text" name="apellido" onChange={capturarInputs} value={paciente.apellido} />


      <label htmlFor="fecha de nacimiento">fecha de nacimiento</label>
      <input type="date" name="fechaNacimiento" onChange={capturarInputs} value={paciente.fechaNacimiento} />


      <label htmlFor="edad">Edad</label>
      <input type="number" name="edad" onChange={capturarInputs} value={paciente.edad} />


      <label htmlFor="diagnostico">Diagnostico</label>
      <input type="text" name="diagnostico" onChange={capturarInputs} value={paciente.diagnostico} />



      <label htmlFor="pais">Localidad</label>
      <select>
        <option value="col">La Colina</option>
        <option value="mar">Las Martinetas</option>
        <option value="mad">La Madrid</option>
        <option value="li">Libano</option>
        <option value="po">Ponteao</option>
      </select>
      
      
      <button >Guardar</button>
      
    </form>

      </div>

      
    </div>
</div>

  )
}

