import { Schema, model, Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Product } from './product';

interface Prices extends Document{
    id: ObjectId;
    factura: string;
    nombre_cliente: string;
    cedula_cliente: number;
    fecha_venta: Date;
    product_id: Array<ObjectId> | Product;
    cantidad: Array<Text>;
    precio?: Array<Text>;
    medio_pago: string;
    tipo_pago: string;
    total: number;
}

const schema = new Schema({
    id: ObjectId,
    factura: {type: String, required: true},
    nombre_cliente: String,
    cedula_cliente: Number,
    fecha_venta: Date,
    product_id: { type: Schema.Types.Array, ref: 'product', required: true },
    cantidad: Array,
    precio: Array,
    medio_pago: String,
    tipo_pago: String,
    total: Number
});

const Prices = model<Prices>('prices', schema);

export default Prices;