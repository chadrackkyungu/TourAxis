/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';

// routes middlewares
import limiter from './middlewares/rateLimit';

// routes
import AppError from './utils/appError';
import globalErrorHandler from './controllers/common/errorHandling';
import shortUrlRouter from './routes/userRoute';

// Load environment variables
dotenv.config();

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet({ contentSecurityPolicy: false }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api', limiter);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(mongoSanitize());
app.use(compression());
app.disable('x-powered-by');
app.use(cors());
app.options('*', cors({
    origin: 'http://front-end-url.com',
    credentials: true
}));

// Routes
app.use('/api/v1/shorten', shortUrlRouter);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
