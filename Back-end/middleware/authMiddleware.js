import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json("No token, access denied");
    }

    // Format: Bearer TOKEN
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "secretkey");

    req.user = decoded; // attach user info to request

    next();
  } catch (error) {
    res.status(401).json("Invalid token");
  }
};

export default authMiddleware;
