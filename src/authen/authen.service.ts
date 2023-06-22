import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { Empresario } from '../empresario/entities/empresario.entity';
import { EmpresarioService } from '../empresario/empresario.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { CandidatoService } from 'src/candidato/candidato.service';

@Injectable()
export class AuthenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly empresarioService: EmpresarioService,
    private readonly candidatoService: CandidatoService,
  ) {}

  async login(user: Empresario | Candidato): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      tipo: user.tipo,
    };

    return {
      access_token: this.jwtService.sign(payload),
      email: user.email,
      id: user.id,
      name: user.name,
      tipo: user.tipo,
    };
  }

  // eslint-disable-next-line prettier/prettier
  async validateUser(email: string, password: string): Promise<Empresario | Candidato> {
    const user: Empresario | Candidato =
      (await this.empresarioService.findByEmail(email)) ||
      (await this.candidatoService.findByEmail(email));

    if (user) {
      const isPasswordValid: boolean = await bcrypt.compare(
        password,
        user.password,
      );

      if (isPasswordValid) {
        return user;
      }

      throw new UnauthorizedError(
        'Email address or password provided is incorrect.',
      );
    }
  }
}
