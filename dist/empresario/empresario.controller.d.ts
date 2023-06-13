import { EmpresarioService } from './empresario.service';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';
import { Empresario } from './entities/empresario.entity';
export declare class EmpresarioController {
    private readonly empresarioService;
    constructor(empresarioService: EmpresarioService);
    create(createEmpresarioDto: CreateEmpresarioDto): Promise<Empresario>;
    findAll(): Promise<Empresario[]>;
    findOne(id: string): Promise<Empresario>;
    update(id: string, updateEmpresarioDto: UpdateEmpresarioDto): Promise<void>;
    remove(id: string): Promise<void>;
}
