import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(parseFloat(num1) + parseFloat(num2));
  const handleSubtraction = () => setResult(parseFloat(num1) - parseFloat(num2));
  const handleMultiplication = () => setResult(parseFloat(num1) * parseFloat(num2));
  const handleDivision = () => {
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult("Error: División por cero");
    }
  };

  return (
    <div>
      <h1>Calculadora Básica</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <div>
        <button onClick={handleAddition}>Sumar</button>
        <button onClick={handleSubtraction}>Restar</button>
        <button onClick={handleMultiplication}>Multiplicar</button>
        <button onClick={handleDivision}>Dividir</button>
      </div>
      <h2>Resultado: {result}</h2>
    </div>
  );
}

export default Calculator;
