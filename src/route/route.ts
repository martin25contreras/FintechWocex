import { Application } from 'express';

import pricesRouter from './prices-router';
import productRouter from './product-router';

const createRoutesV1 = (app: Application): void => {
  app.use('/api/v1/prices', pricesRouter);
  app.use('/api/v1/products', productRouter);
};

export default createRoutesV1;