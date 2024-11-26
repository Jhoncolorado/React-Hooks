import React, { useState } from 'react';

const Numeroentero = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarParImpar = (num) => {
    if (isNaN(num)) {
      setResultado('Por favor ingresa un número válido.');
    } else if (num % 2 === 0) {
      setResultado('El numero es par.');
    } else {
      setResultado('El numero es impar.');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumero(value);
    verificarParImpar(Number(value));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Verificador de Números</h2>
      <input
        type="text"
        value={numero}
        onChange={handleInputChange}
        placeholder="Ingresa un número"
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
      />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{resultado}</p>
    </div>
  );
};

export default Numeroentero;

