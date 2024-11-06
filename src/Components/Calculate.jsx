import { useState } from 'react';

export const Calculate = () => {
    const [result, setResult] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const handleAdd = () => setResult(number1 + number2);
    const handleSubstract = () => setResult(number1 - number2);
    const handleMultiply = () => setResult(number1 * number2);
    const handleDiv = () => {
        if (number2 !== 0) {
            setResult(number1 / number2);
        } else {
            setResult("Error: División por cero");
        }
    };

    return (
        <div className='div-calculator'>
            <h2>Aqui va el resultado: {result}</h2>
            <fieldset>
                <input onChange={(event) => setNumber1(Number(event.target.value))} type="number" placeholder="Ingresa número 1" />
                <input onChange={(event) => setNumber2(Number(event.target.value))} type="number" placeholder="Ingresa número 2" />
            </fieldset>
            <fieldset className='operators'>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubstract}>-</button>
                <button onClick={handleMultiply}>*</button>
                <button onClick={handleDiv}>/</button>
            </fieldset>
        </div>
    );
};

