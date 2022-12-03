import React, { useEffect } from 'react';

const Saludo = ({ name }) => {
    const message = `Hola, ${name}!`;

    useEffect(() => {
        document.title = `Saludos para ${name}`;
    });

    return <h1 className="text-center">{message}</h1>;
};

export default Saludo;