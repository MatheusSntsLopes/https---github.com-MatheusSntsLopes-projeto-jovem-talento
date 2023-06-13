import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { Vaga } from './entities/vaga.entity';
export declare class VagaService {
    private readonly vaga;
    constructor(vaga: typeof Vaga);
    create(vagaDto: CreateVagaDto): Promise<Vaga>;
    findAll(): Promise<Vaga[]>;
    findOne(id: number): Promise<Vaga>;
    update(id: number, { formacao, experiencia, habilidade, quantidade, salario }: UpdateVagaDto): Promise<Vaga>;
    remove(id: number): Promise<void>;
}
