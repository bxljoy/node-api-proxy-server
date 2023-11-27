import { getCurrentWeatherByCityName } from '../controllers/openWeather.js';
import express from 'express';

const router = express.Router();

router.get('/:cityName', getCurrentWeatherByCityName);

export default router;