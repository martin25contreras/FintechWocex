import {Request, Response} from 'express';
import {Types} from 'mongoose';

import Price from '../models/prices';

export const getPrice = async (req: Request, res: Response) : Promise <void> =>{
    const prod = await Price.find();
    res.send(prod);
};

export const getPriceById = async (req: Request, res: Response) : Promise <void> =>{

    const {produId} = req.params;
    
    const price = await Price.findById(produId);

    if (price) {
        res.send(price)
    }else{
        res.status(400).send({});
    }
};