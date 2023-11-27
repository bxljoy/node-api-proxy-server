import axios from "axios";
import 'dotenv/config';

const openWeatherToken = process.env.OPEN_WEATHER_TOKEN;

export const getCurrentWeatherByCityName = async (req, res) => {
    const { cityName } = req.params;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherToken}`)
        .then(response => {
        res.send(response.data);
        })
        .catch(error => {
        console.log(error);
        });
};