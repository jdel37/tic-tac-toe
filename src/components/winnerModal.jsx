import React from 'react';
import {Square} from './Square'; // Make sure to import Square component

export function WinnerModal({ winner, deleteBoard }) {
    if (winner === null) return null;
    
    const winnerText = winner === false ? 'Empate' : 'Gano';
    
    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner !== false && <Square>{winner ? winner : ''}</Square>}
                </header>
                <footer>
                    <button onClick={deleteBoard}>Restart</button>
                </footer>
            </div>
        </section>
    );
}