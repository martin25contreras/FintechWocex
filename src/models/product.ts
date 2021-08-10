import { ObjectId } from 'mongodb';
import {Schema, model, Document} from 'mongoose';

export interface Product extends Document{
  id: ObjectId;
  codigo: string;
  nombre: string;
  cantidad: number;
  precio?: number;
  descripcion?: string;
  categoria: string;
  estatus: boolean;
}

const schema = new Schema({
  id: ObjectId,
  codigo: {type: String, required: true, unique: true},
  nombre: { type: String, required: true, text: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, default: 0 },
  descripcion: { type: String, text: true },
  categoria: { type: String, required: true },
  estatus: Boolean,
});

const Product = model<Product>('product', schema);

export default Product;