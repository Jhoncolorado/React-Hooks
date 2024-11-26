import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimerComponente from './PrimerComponente';
import ToggleMessage from './Components/ToggleMessage';
import EjercicioIndividual from './Components/EjercicioIndividual';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente />
    <ToggleMessage />
    <EjercicioIndividual />
  </React.StrictMode>
);

