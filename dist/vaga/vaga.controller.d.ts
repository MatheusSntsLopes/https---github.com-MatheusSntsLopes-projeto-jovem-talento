import { VagaService } from './vaga.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
export declare class VagaController {
    private readonly vagaService;
    constructor(vagaService: VagaService);
    create(createVagaDto: CreateVagaDto): Promise<import("./entities/vaga.entity").Vaga>;
    findAll(): Promise<import("./entities/vaga.entity").Vaga[]>;
    findOne(id: string): Promise<import("./entities/vaga.entity").Vaga>;
    update(id: string, updateVagaDto: UpdateVagaDto): Promise<import("./entities/vaga.entity").Vaga>;
    remove(id: string): Promise<void>;
}
