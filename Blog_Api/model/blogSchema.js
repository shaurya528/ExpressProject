import mongoose from "mongoose";
const {Schema,model}= mongoose;
const blogsSchema= new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required: true, 
        unique: true, 
        lowercase: true 
      },
      content: { 
        type: String, 
        required: true 
      },
      summary: { 
        type: String 
      },
      author: { 
       type:mongoose.Schema.Types.ObjectId,
       ref:'Users',
       required:true
      },
      tags: [{ 
        type: String, 
        trim: true 
      }],
      views: { 
        type: Number, 
        default: 0 
      }

      
    },{
timestamps:true,
toObject:{virtuals:true},
toJSON:{virtuals:true}
    }
)

blogsSchema.virtual('comments',{
    ref:'comment',
    localField:'_id',
    foreignField:'post'
});

const postModel= model('Post',blogsSchema);
export default postModel