import { Schema, model } from 'mongoose';
import { ObjectId } from 'mongodb';

const schema = new Schema({
    factura: ObjectId,
    nombre_cliente: String,
    cedula_cliente: Number,
    fecha_venta: Date,
    product_id: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    cantidad: Number,
    precio: Number,
    total: Number
});

const Prices = model('prices', schema);

export default Prices;