import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Empresario } from 'src/empresario/entities/empresario.entity';
import { AuthenticationRequest } from '../models/AuthenticationRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Empresario => {
    const request = context.switchToHttp().getRequest<AuthenticationRequest>();

    return request.user;
  },
);
