import { useState } from "react"

  //capturar el formulario creando hook useState(form comienza vacio)
const formInicial = () => {
    const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    edad: "",
    diagnostico: "",
    localidad: "",
  });

  //1-lista de pacientes
  const [pacientes, setPacientes] = useState([]);

  //funcion para capturar inputs.
  const capturarInputs = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values, 
      [name]: value,
    });
  }

  //guardamos data de form.
  const guardarDatos = (e) => {
    e.preventDefault();
    console.log(values)
    //setValues({...formInicial});
    //2-agregar paciente
    setPacientes([...pacientes, values]); // Agrega los datos a la lista de pacientes
    setValues({ nombre: "", apellido: "", fechaNacimiento: "", edad: "", diagnostico: "", localidad: "" }); // Limpia el formulario
  }
  



  return (
    <>
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
                  value={values.nombre}
                  className="form-control mb-3" 
                  placeholder="Ingresar Nombre" 
                  //escuchamos evento(info) de input.
                  onChange={capturarInputs} 
                  />

                  <input type="text" 
                  name="apellido"
                  value={values.apellido}
                  className="form-control mb-3"
                  placeholder="Ingresar Apellido"
                  onChange={capturarInputs} 
                  
                  />

                  <input type="date"
                  name="fechaNacimiento"
                  value={values.fechaNacimiento}
                  className="form-control mb-3"
                  placeholder="Ingresar Fecha Nacimiento"
                  onChange={capturarInputs} 
                  />

                  <input type="number" 
                  name="edad"
                  value={values.edad}
                  className="form-control mb-3"
                  placeholder="Ingresar Edad"
                  onChange={capturarInputs}
                  
                  />

                  <input type="text"
                  name="diagnostico"
                  value={values.diagnostico}
                  className="form-control mb-3"
                  placeholder="Ingresar Diagnostico"
                  onChange={capturarInputs} 
                  />

                  <input type="text"
                  name="localidad"
                  value={values.localidad}
                  className="form-control mb-3"
                  placeholder="Ingresar localidad"
                  onChange={capturarInputs}
                  />

                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Guardar
                </button>

              </div>
            </form>
          </div>
          {/* seccion tabla pacientes */}
          <div className="col-md-8">
              <h3 className="text-center mb-3">Lista(tabla) de Pacientes</h3>          
            <div className="card card-body">
          {/* tabla de prueba */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nacimiento</th>
                <th>Edad</th>
                <th>Diagnóstico</th>
                <th>Localidad</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, id) => (
                <tr key={id}>
                  <td>{paciente.nombre}</td>
                  <td>{paciente.apellido}</td>
                  <td>{paciente.fechaNacimiento}</td>
                  <td>{paciente.edad}</td>
                  <td>{paciente.diagnostico}</td>
                  <td>{paciente.localidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          

          </div>
        </div>
    </div>
    
    </>
  );
};


export default formInicial