import { Request } from 'express';
import { Candidato } from 'src/candidato/entities/candidato.entity';

export interface AuthRequest extends Request {
  user: Candidato;
}
