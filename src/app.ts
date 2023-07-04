import express from 'express';
import productRouter from './Routers/products.routers';
import orderRouter from './Routers/orders.routers';
// import loginRoute from './Routers/login.routers';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);
// app.use('/login', loginRoute);

export default app;
