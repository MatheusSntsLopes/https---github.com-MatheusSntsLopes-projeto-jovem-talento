import { Request } from 'express';
import { Empresario } from '../../empresario/entities/empresario.entity';
import { Candidato } from 'src/candidato/entities/candidato.entity';

export interface AuthRequest extends Request {
  user: Empresario | Candidato;
}
