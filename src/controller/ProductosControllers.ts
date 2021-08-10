import {Request, Response} from 'express';
import Products from "../models/product";

export const getProduct = async (req: Request, res: Response) : Promise <void> =>{
    const itemsForPage = 3;
    const page: number = parseInt(req.query.page as string);
    const start = (page * 1) * itemsForPage;
    const total: number = await Products.count();

    const prod = await Products.find().skip(start).limit(itemsForPage);
    res.send({
        page: page,
        per_page: itemsForPage,
        total: total,
        total_pages: Math.ceil(total / itemsForPage),
        data: prod
    });
};
// REGISTRO DE PRODUCTOS
export const createProduct = async (req: Request, res: Response) : Promise <void> =>{
    const {codigo, nombre, cantidad, precio, descripcion, categoria, estatus} = req.body;

    const productAux = await Products.find({"codigo": codigo});
    console.log(productAux)
    if (productAux.length > 0) {
        res.send({message: "Producto ya registrado"});
    } else {
        const product = await Products.create({
            codigo, 
            nombre, 
            cantidad, 
            precio, 
            descripcion, 
            categoria,
            estatus,
        });
    
        res.send(product);
    }
};

export const getProductById = async (req: Request, res: Response) : Promise <void> =>{
    const {productId} = req.params;

    const product = await Products.findById(productId);

    if (product) {
        res.send({data: product});
    } else {
     res.status(404).send({})   
    }    
};

//VARIACION DE PRODUCTOS
export const updateProduct = async (req: Request, res: Response) : Promise <void> =>{
    
    const {codigo, nombre, cantidad, precio, descripcion, categoria} = req.body;
    
    const updateProduct = await Products.findOneAndUpdate({"codigo": codigo}, {
        nombre, 
        cantidad, 
        precio, 
        descripcion, 
        categoria,
    });

    if (updateProduct) {
        res.send({data: "OK"});
    } else {
        res.status(404).send({});
    }
    
};

export const updateStock = async (req: Request, res: Response) : Promise <void> =>{
    
    const {codigo, cantidad, estatus} = req.body;

    if(estatus != true || estatus != false){
        res.send({message: "Estatus tiene valores incorrectos"});
    }else if(cantidad < 0){
        res.send({message: "La cantidad no puede ser negativa"});
    }else{
        const updateProduct = await Products.findOneAndUpdate({"codigo": codigo}, {
            cantidad, 
            estatus,
        });
    
        if (updateProduct) {
            res.send({data: "OK"});
        } else {
            res.status(404).send({});
        }
    }
};

export const getKeyProduct = async (req: Request, res: Response) : Promise <void> =>{
    
    const keyId = req.params.keyId;

    const nombre = await Products.find({"nombre": keyId});

    if (nombre.length>0) {
        res.send(nombre);
    } else {
            const reg = new RegExp(keyId);//creo una expresion regular para buscar coincidencia del texto buscado en la descripcion
            const descripcion = await Products.find ({ "descripcion": reg });

            if (descripcion.length>0){
                res.send(descripcion);
            }else{
                res.send('No se encuentra ningun Producto con esa palabra clave');
            }
        }
};

export const getClasificacionProduct= async (req: Request, res: Response) : Promise <void> =>{
    
    const categoryId = req.params.categoryId;
    
    const categories = await Products.find({ "categoria":  categoryId});

    if(categories.length >0){
        res.send(categories);
    }else{
        res.send('Este tipo de venta no se encuentra registrado en nuestros productos, solo contamos con: (Lacteos, Granos, Frijoles o Carnes)');
    }
};