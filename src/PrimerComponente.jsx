import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Exercise3 from './Components/Exercise3';
import { Calculate } from './Components/Calculate';
import UserForm from './Components/UserForm';
import TaskManager from './Components/TaskManager';

function PrimerComponente() {
  return (
    <Router>
      <div>
<nav className="p-4 bg-blue-500 text-white">
  <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
  <Link to="/calculator" style={{ marginRight: '10px' }}>Calculadora Personal</Link>
  <Link to="/exercise3" style={{ marginRight: '10px' }}>Ejercicio 3</Link>
  <Link to="/calculate" style={{ marginRight: '10px' }}>Calculadora Instructor</Link>
  <Link to="/user-form" style={{ marginRight: '10px' }}>Registro de Usuario</Link>
  <Link to="/task-manager" style={{ marginRight: '10px' }}>Gestión de Tareas</Link>
</nav>


        <div className="mt-4 p-4">
          <Routes>
            <Route path="/" element={<h1>Bienvenido a la Aplicación</h1>} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/exercise3" element={<Exercise3 />} />
            <Route path="/calculate" element={<Calculate />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/task-manager" element={<TaskManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default PrimerComponente;


