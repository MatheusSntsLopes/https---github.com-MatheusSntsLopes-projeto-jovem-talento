import { Injectable } from '@nestjs/common';
import { EmpresarioService } from 'src/empresario/empresario.service';
import * as bcrypt from 'bcrypt';
import { Empresario } from 'src/empresario/entities/empresario.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { UnauthorizedError } from './errors/unauthorized.error';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly empresarioService: EmpresarioService,
    private readonly jwtService: JwtService,
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
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
