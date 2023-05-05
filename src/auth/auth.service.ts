import { Injectable } from '@nestjs/common';
import { CandidatoService } from 'src/candidato/candidato.service';
import * as bcrypt from 'bcrypt';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
@Injectable()
export class AuthService {
  constructor(
    private readonly candidatoService: CandidatoService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: Candidato): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.nome,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string): Promise<Candidato> {
    const candidato = await this.candidatoService.findByEmail(email);

    if (candidato) {
      const verificarSenha = await bcrypt.compare(password, candidato.senha);

      if (verificarSenha) {
        return { ...candidato };
      }
    }

    throw new Error('Email e/ou senha invalido');
  }
}
