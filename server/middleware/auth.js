// middleware/auth.js
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || "secret"; // Save this in your .env file
module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    // return res.status(401).json({ msg: 'No token, authorization denied' });
    return res.status(401).json({ msg: 'Authorization Failed.' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
