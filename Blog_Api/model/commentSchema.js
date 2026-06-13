import mongoose from "mongoose";

const {Schema,model}= mongoose;
const commentsSchema=new Schema({
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

commentsSchema.index({post:1});
const commentModel=model('comment',commentsSchema);
export default commentModel
    