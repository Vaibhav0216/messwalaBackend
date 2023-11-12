import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String, 
    required: true, 
    select: false 
  }, // Use select: false for sensitive data
  created_at: { 
    type: Date, 
    default: Date.now   
  },
});


// creating model of this schema...
const User = mongoose.model('User', userSchema);

export default User;
