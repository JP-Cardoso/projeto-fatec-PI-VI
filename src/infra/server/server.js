import express from 'express';
import router from '../api/router/router.js';
import { corsConfig } from './config/cors.js';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(corsConfig);
app.use(express.json());
app.use(router);

export default app;