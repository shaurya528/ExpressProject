import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  if (!req.headers.authorization?.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_Secret);
    req.user = decode;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Not authorized, token failed or expired' });
  }
};