// middleware/authenticateToken.js
import jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
  let token = null;

  // 1. Cek Authorization header dulu (untuk cross-origin requests)
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7); // Remove "Bearer " prefix
  }
  // 2. Fallback ke cookie (untuk same-origin requests)
  else if (req.cookies.token) {
    token = req.cookies.token;
  }

  // Kalau tidak ada token dari kedua source
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Verify JWT token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT verification error:", err.message);
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = user; // Attach user data ke request
    next();
  });
}
