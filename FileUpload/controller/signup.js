
import User from "../Model/UserDetail.js"
const signup=async(req,res)=>{
    try {
        const { email, password, name } = req.body;
    
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ msg: 'Email already registered' });
        }
        const user = new User({ email, password, name });
        await user.save();
        res.status(201).json({
            msg: 'User registered successfully',
            user: { id: user._id, email: user.email, name: user.name },
          });
        
    }catch(err){
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
}
export default signup