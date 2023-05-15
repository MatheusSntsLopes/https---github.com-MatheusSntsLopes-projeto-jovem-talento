import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Empresario } from 'src/empresario/entities/empresario.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.user;
  },
);
