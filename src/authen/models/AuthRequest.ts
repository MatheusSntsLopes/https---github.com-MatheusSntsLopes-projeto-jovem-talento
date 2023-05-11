import { Request } from 'express';
import { Empresario } from '../../empresario/entities/empresario.entity';

export interface AuthRequest extends Request {
  user: Empresario;
}
