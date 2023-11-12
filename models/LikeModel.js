import mongoose from "mongoose";
import { Schema } from "mongoose";

const likeSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mess: { type: mongoose.Schema.Types.ObjectId, ref: 'Mess', required: true },
  review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
  created_at: { type: Date, default: Date.now },
  // Add other like-related fields as needed
});

const Like = mongoose.model('Like', likeSchema);

export default Like;
