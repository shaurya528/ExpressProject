import Post from '../model/blogSchema.js'
export const owenshipCheck=(modelName)=>async(req,res,next)=>{
    const model = modelName===  "Post"?Post:null;
    if(!model){
        return res.status(500).json({ message: 'Invalid model name' });
    }

 const data=await model.findById(req.param.id) ;
 if(!data){
    return res.status(404).json({ message: 'Not found' });
 }
 if (data.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'You are not the owner' });
  }
  next();
       
}



