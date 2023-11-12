import mongoose from "mongoose";
import { Schema } from "mongoose";

const reviewSchema = new Schema({
  mess: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Mess', 
    required: true 
    },
  user: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'User', 
     required: true 
    },
  description: { 
    type: String, 
    required: true 
},
  numberOfStars: { 
    type: Number,
     required: true 
    },
  likes: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Like' 
}],
  dislikes: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Dislike' 
}],
  created_at: { 
    type: Date, default: Date.now 
},
  // Add other review-related fields as needed
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
