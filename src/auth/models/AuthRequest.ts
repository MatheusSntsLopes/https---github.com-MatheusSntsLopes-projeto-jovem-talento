import { Request } from 'express';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { Empresario } from 'src/empresario/entities/empresario.entity';

export interface AuthRequest extends Request {
  user: Candidato | Empresario;
}
