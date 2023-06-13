import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { Candidato } from './entities/candidato.entity';
export declare class CandidatoService {
    private readonly candidato;
    constructor(candidato: typeof Candidato);
    create(candidatoDto: CreateCandidatoDto): Promise<Candidato>;
    findAll(): Promise<Candidato[]>;
    findOne(id: number): Promise<Candidato>;
    update(id: number, { email, name, password, cpf, bairro, cep, cidade, estado, numero, rua, telefone, }: UpdateCandidatoDto): Promise<void>;
    remove(id: number): Promise<void>;
    findByEmail(email: string): Promise<Candidato>;
}
