const productosControllers = require('../controller/ProductosControllers');
const ventasControllers = require('../controller/VentasControllers');

const createRoute = (app) =>{
    //app.get('/api/respaldo' , respaldoController.respaldoMongo);
    app.get('/api/index' , (req, res) =>{
        res.status(200).send("Hola");
        res.end();
    });
};

module.exports ={
    createRoute
}