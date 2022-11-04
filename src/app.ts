import express from 'express';
import productRouter from './routes/product.routes';
import userRouter from './routes/user.routes';
import httpErrorMiddleware from './middlewares/httpError';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

app.use(httpErrorMiddleware);

export default app;
