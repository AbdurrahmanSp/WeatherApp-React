import { REQUEST_URL } from '../config';

export const getWeatherData = async () => {
    const weatherResponse = await fetch(REQUEST_URL);

    if (!weatherResponse.ok) {
        throw new Error('Sory, something went wrong!')
    }

    const weatherData = await weatherResponse.json();

    return weatherData;
}