import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Token not found' });
  try {
    const decoded = jwt.verify(token, SECRET) as JwtPayload;

    req.tokenData = decoded.data;
    return next();
  } catch (error: unknown) {
    if (error instanceof Error && error.name.includes('Token')) {
      return res.status(401).json({ error: 'Invalid token' });
    } 

    return next(error);
  }
};