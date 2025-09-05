import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String, // store cloudanary and provide url
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    duration: {
      type: Number, 
      required: true,
    },
    views:{
        type:Number,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  {
    timestamps: true,
  }
);

export const VideoSchema = mongoose.model("VideoSchema", videoSchema);
