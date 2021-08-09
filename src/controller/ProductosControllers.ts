import {Request, Response} from 'express';
import {Types} from 'mongoose';

import Product from '../models/product';

export const getProduct = async (req: Request, res: Response) : Promise <void> =>{
    const prod = await Product.find();
    res.send(prod);
};

export const getProductById = async (req: Request, res: Response) : Promise <void> =>{

    const {produId} = req.params;
    
    const product = await Product.findById(produId);

    if (product) {
        res.send(product)
    }else{
        res.status(400).send({});
    }
};