import jwt from 'jsonwebtoken';
import ItokenData from '../interfaces/Itoken';

const jwtConfig = { expiresIn: '1d' };

const SECRET = 'secret_ruim';

export default (data: ItokenData) => jwt.sign({ data }, SECRET, jwtConfig);
