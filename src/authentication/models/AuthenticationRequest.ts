import { Request } from 'express';
import { Empresario } from 'src/empresario/entities/empresario.entity';

export interface AuthenticationRequest extends Request {
  user: Empresario;
}
