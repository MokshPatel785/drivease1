// middleware/authMiddleware.js

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // In production, use JWT verification here
    const userId = Buffer.from(token, 'base64').toString();
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// This checks if the request includes a user with a certain role
exports.authorizeRole = (role) => {
  return (req, res, next) => {
    const userRole = req.body.role; // This is just an example, usually you'd use JWT tokens

    if (userRole !== role) {
      return res.status(403).json({ message: `Access denied for role: ${userRole}` });
    }

    next(); // allow request to continue
  };
};
