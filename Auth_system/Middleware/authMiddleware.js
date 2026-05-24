import  jwt from  'jsonwebtoken';

export const  authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader ||  !authHeader.startsWith('Bearer ')){
       return res.status(401).json({message: 'Access denied. No token provided.'})
    }
    const token  = authHeader.split(' ')[1];

    try{
       const decode = jwt.verify(token,process.env.jwt_Secret);

       req.user={
        id:decode.id,
        email:decode.email,
        role:decode.role
       }
       next();
    }catch(error){
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired. Please refresh.' });
          }
          return res.status(403).json({ message: 'Invalid token.' });
    }
}