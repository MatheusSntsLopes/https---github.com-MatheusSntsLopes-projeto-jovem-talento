import { CreateCandidatoVagaDto } from './dto/create-candidato-vaga.dto';
import { UpdateCandidatoVagaDto } from './dto/update-candidato-vaga.dto';
import { CandidatoVaga } from './entities/candidato-vaga.entity';
export declare class CandidatoVagaService {
    private readonly candidatoVaga;
    constructor(candidatoVaga: typeof CandidatoVaga);
    create(createCandidatoVagaDto: CreateCandidatoVagaDto): Promise<CandidatoVaga>;
    findAll(): Promise<CandidatoVaga[]>;
    findOne(id: number): Promise<CandidatoVaga>;
    update(id: number, { status }: UpdateCandidatoVagaDto): Promise<CandidatoVaga>;
    remove(id: number): Promise<void>;
    findCandidato(vagaId: number): Promise<CandidatoVaga>;
    findAllCandidatoVaga(candidatoId: number): Promise<CandidatoVaga[]>;
    findAllVagaCandidato(vagaId: number): Promise<CandidatoVaga[]>;
}
