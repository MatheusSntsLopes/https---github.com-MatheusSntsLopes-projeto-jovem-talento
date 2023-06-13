import { CurriculoService } from './curriculo.service';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Curriculo } from './entities/curriculo.entity';
export declare class CurriculoController {
    private readonly curriculoService;
    constructor(curriculoService: CurriculoService);
    create(createCurriculoDto: CreateCurriculoDto): Promise<Curriculo>;
    findAll(): Promise<Curriculo[]>;
    findOne(id: string): Promise<Curriculo>;
    update(id: string, updateCurriculoDto: UpdateCurriculoDto): Promise<Curriculo>;
    remove(id: string): Promise<void>;
}
