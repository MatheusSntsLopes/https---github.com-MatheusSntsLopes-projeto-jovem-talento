import { Injectable } from '@nestjs/common';
import { CandidatoService } from '../candidato/candidato.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly candidatoService: CandidatoService,
    private readonly jwtService: JwtService,
  ) {}
  async create(email, password) {
    const candidato = await this.candidatoService.findOne(email);

    if (!candidato) {
      throw new Error('Não existe candidato com esse email');
    }

    const compararSenha = await compare(password, candidato.senha);

    if (!compararSenha) {
      throw new Error('Senha incorreta');
    }

    const payload = { email: candidato.email, nome: candidato.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
