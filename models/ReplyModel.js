import mongoose from "mongoose";
import { Schema } from "mongoose";

const replySchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mess: { type: mongoose.Schema.Types.ObjectId, ref: 'Mess', required: true },
  review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  // Add other reply-related fields as needed
});

const Reply = mongoose.model('Reply', replySchema);

export default Reply;
