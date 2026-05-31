import mongoose from "mongoose";
const {Schema,model}= mongoose;
const blog_schema= mongoose.Schema({
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
toJSON:{virtual:true}
    }
)
blog_schema.index({slug:1});
blog_schema.virtual('comments',{
    ref:'comment',
    localField:'_id',
    foreignField:'post'
});

const post_model= model('Post',blog_schema);
export default post_model