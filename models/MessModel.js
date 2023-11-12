import mongoose from "mongoose";
import { Schema } from "mongoose";

const messSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    photos: [{ type: String }],
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {
    timestamps: true, 
  }
);

// creating model of messSchema..
const Mess = mongoose.model("Mess", messSchema);

export default Mess;


