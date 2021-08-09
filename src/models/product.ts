import { ObjectId } from 'mongodb';
import {Schema, model} from 'mongoose';

const schema = new Schema({
    codigo: ObjectId,
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, default: 0 },
    description: String,
    estatus: Boolean,
  });

const Product = model('product', schema);

export default Product;