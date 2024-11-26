import React, { useState } from 'react';

const PlayJuego = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const options = ['Piedra', 'Papel', 'Tijera'];

    const playGame = (userSelection) => {
        setUserChoice(userSelection);

        const randomIndex = Math.floor(Math.random() * options.length);
        const computerSelection = options[randomIndex];
        setComputerChoice(computerSelection);

        determineWinner(userSelection, computerSelection);
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult('Empate');
        } else if (
            (user === 'Piedra' && computer === 'Tijera') ||
            (user === 'Tijera' && computer === 'Papel') ||
            (user === 'Papel' && computer === 'Piedra')
        ) {
            setResult('¡Ganaste!');
        } else {
            setResult('Perdiste');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Piedra, Papel o Tijera</h1>
            <div>
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => playGame(option)}
                        style={{
                            fontSize: '20px',
                            margin: '10px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {userChoice && computerChoice && (
                <div style={{ marginTop: '20px' }}>
                    <p><strong>Tu elección:</strong> {userChoice}</p>
                    <p><strong>Elección de la máquina:</strong> {computerChoice}</p>
                    <h2>{result}</h2>
                </div>
            )}
        </div>
    );
};

export default PlayJuego;

