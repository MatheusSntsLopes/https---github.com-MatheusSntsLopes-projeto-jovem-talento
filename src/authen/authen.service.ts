import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { Empresario } from '../empresario/entities/empresario.entity';
import { EmpresarioService } from '../empresario/empresario.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly empresarioService: EmpresarioService,
  ) {}

  async login(user: Empresario): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<Empresario> {
    const user = await this.empresarioService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return user;
      }

      throw new UnauthorizedError(
        'Email address or password provided is incorrect.',
      );
    }
  }
}
