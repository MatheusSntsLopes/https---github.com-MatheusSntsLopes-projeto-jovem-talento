import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Candidato => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
