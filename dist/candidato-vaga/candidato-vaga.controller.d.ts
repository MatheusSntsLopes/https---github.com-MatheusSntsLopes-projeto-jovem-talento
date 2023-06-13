import { CandidatoVagaService } from './candidato-vaga.service';
import { CreateCandidatoVagaDto } from './dto/create-candidato-vaga.dto';
import { UpdateCandidatoVagaDto } from './dto/update-candidato-vaga.dto';
import { CandidatoVaga } from './entities/candidato-vaga.entity';
export declare class CandidatoVagaController {
    private readonly candidatoVagaService;
    constructor(candidatoVagaService: CandidatoVagaService);
    create(createCandidatoVagaDto: CreateCandidatoVagaDto): Promise<CandidatoVaga>;
    findAll(): Promise<CandidatoVaga[]>;
    findOne(id: string): Promise<CandidatoVaga>;
    update(id: string, updateCandidatoVagaDto: UpdateCandidatoVagaDto): Promise<CandidatoVaga>;
    remove(id: string): Promise<void>;
    findCandidato(vagaId: string): Promise<CandidatoVaga>;
}
