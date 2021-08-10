# FintechWocex
Hay un archivo TXT en la raiz del proyecto indicando ciertos requerimientos y el uso de los JSON

RUTA PARA LA CREACION LOCAL DEL PRODUCTO
    http://localhost:5000/api/products/create

LISTAR TODOS LOS PRODUCTOS POR PAGINAS
    http://localhost:5000/api/products/listen?page=0

ACTUALIZAR CIERTOS DATOS DEL PRODUCTO
    http://localhost:5000/api/products/change

ACTUALIZAR STOCK DEL PRODUCTO
    http://localhost:5000/api/products/stock

CREACION DE LA VENTA
    http://localhost:5000/api/prices/create

LISTAR TODAS LAS VENTAS
    http://localhost:5000/api/prices/listen


REPORTES
*REPORTE POR TIPO DE VENTA
    http://localhost:5000/api/prices/typePrices

*REPORTE POR METODO DE PAGO
    http://localhost:5000/api/prices/methodPayment

*OBTENER PRODUCTOS CON ALGUNA PALABRA CLAVE
    http://localhost:5000/api/products/KeyProduct/:keyId

*OBTENER PRODUCTOS POR SU CLASFICACION
    http://localhost:5000/api/products/clasificacionProduct/:categoryId

*VENTAS POR DIA
    http://localhost:5000/api/prices/day;

*PRODUCTOS VENDIDOS POR DIA
    http://localhost:5000/api/prices/dayProduct
