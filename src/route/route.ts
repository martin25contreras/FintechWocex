import { Application } from 'express';

//import pricesRouter from './prices-router';
//import productRouter from './product-router';
import * as ProductosControllers from "../controller/ProductosControllers";
import * as VentasControllers from "../controller/VentasControllers";

const createRoutesV1 = (app: Application): void => {
//Productos
  app.post('/api/products/create', ProductosControllers.createProduct);
  app.get('/api/products/listen', ProductosControllers.getProduct);
  app.get('/api/products/:productId', ProductosControllers.getProductById);
  app.put('/api/products/change', ProductosControllers.updateProduct);//ACTUALIZAR LOS PRODUCTOS
  app.put('/api/products/stock', ProductosControllers.updateStock);//ACTUALIZAR EL STOCK
  app.get('/api/products/KeyProduct/:keyId', ProductosControllers.getKeyProduct);//OBTENER PRODUCTOS CON ALGUNA PALABRA CLAVE
  app.get('/api/products/clasificacionProduct/:categoryId', ProductosControllers.getClasificacionProduct);//OBTENER PRODUCTOS POR SU CLASFICACION
  
  

//ventas
  app.post('/api/prices/create', VentasControllers.createPrice);
  app.get('/api/prices/listen', VentasControllers.getPrice);
  app.get('/api/prices/day', VentasControllers.getPriceDay);//VENTAS POR DIA
  app.get('/api/prices/dayProduct', VentasControllers.getPriceProductoDay);//PRODUCTOS VENDIDOS POR DIA
  app.get('/api/prices/methodPayment', VentasControllers.getMethodPayment);//REPORTE POR METODO DE PAGO
  app.get('/api/prices/typePrices', VentasControllers.getTypePrice);//REPORTE POR TIPO DE VENTA
};

export default createRoutesV1;