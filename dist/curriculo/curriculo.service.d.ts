import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Curriculo } from './entities/curriculo.entity';
export declare class CurriculoService {
    private readonly curriculo;
    constructor(curriculo: typeof Curriculo);
    create(createCurriculoDto: CreateCurriculoDto): Promise<Curriculo>;
    findAll(): Promise<Curriculo[]>;
    findOne(id: number): Promise<Curriculo>;
    update(id: number, { biografia, formacao, habilidade, competencia, experiencia, }: UpdateCurriculoDto): Promise<Curriculo>;
    remove(id: number): Promise<void>;
}
