import mongoose from "mongoose";

const {Schema,model}= mongoose;
const comment_schema=mongoose.Schema({
    content:{
        type:String,
        required:true,
        maxlength:[1000, 'Comment cannot exceed 1000 characters']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: true 
  },
  post: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post', 
    required: true 
  }
}, { timestamps: true });

comment_schema.index({post:1});
const comment_model=model('comment',comment_schema);
export default comment_model
    