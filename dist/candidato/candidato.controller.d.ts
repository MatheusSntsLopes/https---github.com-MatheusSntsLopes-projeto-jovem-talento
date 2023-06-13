import { CandidatoService } from './candidato.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
export declare class CandidatoController {
    private readonly candidatoService;
    constructor(candidatoService: CandidatoService);
    create(createCandidatoDto: CreateCandidatoDto): Promise<import("./entities/candidato.entity").Candidato>;
    findAll(): Promise<import("./entities/candidato.entity").Candidato[]>;
    findOne(id: number): Promise<import("./entities/candidato.entity").Candidato>;
    update(id: string, updateCandidatoDto: UpdateCandidatoDto): Promise<void>;
    remove(id: string): Promise<void>;
}
