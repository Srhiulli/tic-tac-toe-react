import React from 'react';
import '@/app/globals.css';

interface SquareProps {
    value: any;
    onSquareClick: (i: any) => void
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (
        <button
            className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default Square;
