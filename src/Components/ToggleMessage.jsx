import React, { useState } from 'react';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleMessage}>
        {isVisible ? 'Ocultar' : 'Mostrar'}
      </button>
      {isVisible && <p>Bienvenido A Nuestra Aplicacion</p>}
    </div>
  );
};

export default ToggleMessage;