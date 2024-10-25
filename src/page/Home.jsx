
import { useState } from "react"

// const desloguear = () => {
    //hacerla ya, mas tarde...
// }

const Home = () => {

  //capturar el formulario(form comienza vacio)
  const estadoInicial = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    edad: "",
    diagnostico: "",
    localidad: ""
  }

  //estado inicial: vacio
  const {paciente, setPaciente} = useState(estadoInicial)

  //funcion para capturar inputs.
  const capturarInputs = (e) => {
    const {name, value} = e.target;
    //almacenamos en variable de estado:
    setPaciente({...paciente, [name]:value})
  }
  //guardamos data de form.
  const guardarDatos = async (e) => {
    e.preventDefault();
    
    setPaciente({...estadoInicial})
  }



  return (
    <div className="container">Home
      <h4>Bienvenido <strong>Correo@Usuario</strong> Haz iniado sesión</h4>
      {/* agregar evento */}
      <button className="btn btn-primary">Cerrar Sesión</button>

      <hr />

        <div className="row">
          {/* seccion formularo */}
          <div className="col-md-4">
            <h3 className="text-center mb-3">Ingresar Paciente</h3>

            <form onSubmit={guardarDatos}>

              <div className="card card-body  ">
                <div className="form-group">
                  
                  <input type="text"
                  name="nombre" 
                  className="form-control mb-3" 
                  placeholder="Ingresar Nombre" 
                  //escuchamos evento(info) de input.
                  //onChange={capturarInputs} value={paciente.nombre}
                  />

                  <input type="text" 
                  name="apellido"
                  className="form-control mb-3"
                  placeholder="Ingresar Apellido"
                  // onChange={capturarInputs} value={paciente.apellido}
                  />

                  <input type="date"
                  name="fechaNacimiento"
                  className="form-control mb-3"
                  placeholder="Ingresar Fecha Nacimiento"
                  // onChange={capturarInputs} value={paciente.fechaNacimiento}

                  />

                  <input type="number" 
                  name="edad"
                  className="form-control mb-3"
                  placeholder="Ingresar Edad"
                  // onChange={capturarInputs} value={paciente.edad}
                  
                  />

                  <input type="text"
                  name="diagnostico"
                  className="form-control mb-3"
                  placeholder="Ingresar Diagnostico"
                  // onChange={capturarInputs} value={paciente.diagnostico}
                  />

                  <input type="text"
                  name="localidad"
                  className="form-control mb-3"
                  placeholder="Ingresar localidad"
                  //onChange={capturarInputs} value={paciente.localidad}
                  />

                </div>
                <button className="btn btn-primary mt-3">
                  Guardar
                </button>
              </div>
            </form>
          </div>
          {/* seccion tabla pacientes */}
          <div className="col-md-8">
          <h2 className="text-center mb-5">Lista(tabla) de pacientes</h2>
          </div>
        </div>
    </div>
  )
}

export default Home