const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your company name"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "userModel",
      required: [true, "Board must belong to a user"] 
  },
    
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);


const boardModel = mongoose.model("boardModel", boardSchema);

module.exports = boardModel;