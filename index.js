import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import openWeatherRoutes from './routes/openWeather.js';
import apxDataRoutes from './routes/apxDataRoute.js';

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use('/openWeather', openWeatherRoutes); 
app.use('/apxData', apxDataRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));