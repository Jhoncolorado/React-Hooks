import { useState } from 'react';

export const HuseState = () => {
    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('');

    const handleName = (event) => setInputName(event.target.value);
    const handleShowName = () => setName(inputName);

    return (
        <>
            <h2 className='m-2 text-white text-6xl'>Bienvenido {name}</h2>
            <input
                onChange={handleName}
                className='rounded-xl m-4 pl-3 text-blue-500'
                placeholder='tu nombre'
                type="text"
            />
            <button onClick={handleShowName} className='bg-gray-500 p-4 font-normal rounded-2xl'>
                Saludar
            </button>
        </>
    );
};
