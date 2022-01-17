import React  from 'react';
import { kelvinToCelsius } from '../../helpers';

const Widget = ({ name, temp }) => {
    if (!name && !temp) return null

    const convertedTemp = kelvinToCelsius(temp);
    const realTemp = `${convertedTemp}°C`;

    return (
        <>
            <h1>{name}</h1>
            <span>{realTemp}</span>
        </>
    );
}

export default Widget;
