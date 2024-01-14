import express from 'express';
import { getApxData } from '../controllers/jsonDataProvider.js';

const router = express.Router();

router.get('/', getApxData);

export default router;