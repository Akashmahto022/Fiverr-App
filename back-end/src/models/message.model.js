import mongoose, { Schema } from "mongoose";

const messageScehma = new Schema(
  {
      conversationId: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
},
{ timestamps: true }
);

export const Message = mongoose.model("Message", messageScehma);
