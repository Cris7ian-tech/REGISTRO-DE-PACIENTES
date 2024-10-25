
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Aplicación de Administración de Pacientes</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Pacientes
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Agrega Paciente
        </NavLink>
      </div>
    </header>
  );
};

export default Header;