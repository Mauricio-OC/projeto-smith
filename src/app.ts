import express from 'express';
import productRouter from './Routers/products.routers';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', productRouter);

export default app;
