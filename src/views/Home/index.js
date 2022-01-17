import React, {useEffect, useState} from 'react';
import { getWeatherData } from '../../api/WeatherApi';
import Loader from '../../components/Common/Loader';
import Widget from '../../components/Widget/Widget';


const HomeView = () => {
    const [name, setName] = useState('');
    const [temp, setTemp] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);

        const weatherData = await getWeatherData();
        const { main: { temp }, name } = weatherData;

        setName(name);
        setTemp(temp);

        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <Widget name={name} temp={temp} />
    );
}

export default HomeView;
