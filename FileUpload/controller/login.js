import User from "../Model/UserDetail.js"
import { jwtTokenGenerator } from "../services/WebTokenGenerate.js"



const login=async(req,res)=>{
    try {
        const { email, password } = req.body;
    
        // Find user
        const user = await User.findOne({ email }).select('+password');;
        if (!user) {
          return res.status(401).json({ msg: 'Invalid credentials' });
        }
    
        
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return res.status(401).json({ msg: 'Invalid credentials' });
        }
    
        const token = jwtTokenGenerator(user);
    
        res.json({
          msg: 'Login successful',
          token,
          user: { id: user._id, email: user.email, name: user.name },
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
      }
}
export default login;