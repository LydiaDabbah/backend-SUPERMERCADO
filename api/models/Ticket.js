import mongoose,{ Schema } from "mongoose";

 
const ticketSchema = new Schema({ // dondemongoose.Schema() e la funcion constructora y moongose.schema es la clase
   subtotal: Number,
   tax: Number,
   total:Number,
   items:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Item"
   }],
   user:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
   }]

 });
  export default mongoose.model('Ticket', ticketSchema); // aqui se le agrega el nombre

