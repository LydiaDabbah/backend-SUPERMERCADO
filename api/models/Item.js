import mongoose,{ Schema } from "mongoose";

 
const itemSchema = new Schema({ // dondemongoose.Schema() e la funcion constructora y moongose.schema es la clase
   name: String,
   price: Number,
   stock:Number
 });
  export default mongoose.model('Item', itemSchema); // aqui se le agrega el nombre

