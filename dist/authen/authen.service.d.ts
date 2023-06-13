import { JwtService } from '@nestjs/jwt';
import { Empresario } from '../empresario/entities/empresario.entity';
import { EmpresarioService } from '../empresario/empresario.service';
import { UserToken } from './models/UserToken';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { CandidatoService } from 'src/candidato/candidato.service';
export declare class AuthenService {
    private readonly jwtService;
    private readonly empresarioService;
    private readonly candidatoService;
    constructor(jwtService: JwtService, empresarioService: EmpresarioService, candidatoService: CandidatoService);
    login(user: Empresario | Candidato): Promise<UserToken>;
    validateUser(email: string, password: string): Promise<Empresario | Candidato>;
}
