import mongoose from "mongoose";
import { Schema } from "mongoose";

const dishSchema = new Schema({
  mess: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Mess', required: true },
  days: [{
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  }],
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
