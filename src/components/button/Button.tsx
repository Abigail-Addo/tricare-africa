import React from 'react';

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-green-600 text-white px-5 py-2 rounded hover:bg-green-800 focus:bg-green-800 ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;