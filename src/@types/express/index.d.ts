import ItokenData from '../../interfaces/Itoken';

declare module 'express-serve-static-core' {
  interface Request {
    tokenData?: ItokenData;
  }
}