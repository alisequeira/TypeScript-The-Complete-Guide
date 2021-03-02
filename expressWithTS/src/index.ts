import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './appRouter';
import './controllers/LoginControllers';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskjf'] }));
app.use(router);
app.use(AppRouter.getInstance());
app.listen(3000, () => console.log('server listening at port 3000'))