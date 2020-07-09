import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';
import createConnection from './database';

import AppError from './errors/AppError';
import uploadConfig from './config/upload';

import routes from './routes';

createConnection();

const app = express();

app.use(cors());

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  },
);

export default app;
