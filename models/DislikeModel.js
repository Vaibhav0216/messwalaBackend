import mongoose from "mongoose";
import { Schema } from "mongoose";

const dislikeSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mess: { type: mongoose.Schema.Types.ObjectId, ref: 'Mess', required: true },
  review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
  created_at: { type: Date, default: Date.now },
  // Add other dislike-related fields as needed
});

const Dislike = mongoose.model('Dislike', dislikeSchema);

export default Dislike;
