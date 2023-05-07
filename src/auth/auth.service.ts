import { Injectable } from '@nestjs/common';
import { CandidatoService } from 'src/candidato/candidato.service';
import * as bcrypt from 'bcrypt';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { UnauthorizedError } from './errors/unauthorized.error';
@Injectable()
export class AuthService {
  constructor(
    private readonly candidatoService: CandidatoService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: Candidato): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<Candidato> {
    const user = await this.candidatoService.findByEmail(email);

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
