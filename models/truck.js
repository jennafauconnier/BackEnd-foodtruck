import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const truckSchema = new Schema({
  name: {type: String},
  description: {type: String},
  speciality: {type: String},

})

const Truck = mongoose.model('Truck', truckSchema)

export { Truck }