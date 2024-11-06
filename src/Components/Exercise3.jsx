import React, { useState } from 'react';

function Exercise3() {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Función para generar un color hexadecimal aleatorio
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h2>Generador de Color Aleatorio</h2>
      <button onClick={generateRandomColor} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Cambiar Color de Fondo
      </button>
      <p>Color actual: {bgColor}</p>
    </div>
  );
}

export default Exercise3;
