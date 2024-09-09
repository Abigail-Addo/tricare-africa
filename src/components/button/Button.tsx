import React from 'react';
import Image from 'next/image';


interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    image?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, image }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-green-600 text-white px-5 py-2 rounded hover:bg-green-800 focus:bg-green-800 flex items-center ${className}`}
        >
            {image && (
                <Image src={image} alt='' className="w-4 h-4 mr-2" width={100} height={100} />
            )}
            {text}
        </button>
    );
};

export default Button;
