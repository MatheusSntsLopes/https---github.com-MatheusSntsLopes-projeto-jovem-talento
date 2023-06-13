import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';
import { Empresario } from './entities/empresario.entity';
export declare class EmpresarioService {
    private readonly empresario;
    constructor(empresario: typeof Empresario);
    create(empresarioDto: CreateEmpresarioDto): Promise<Empresario>;
    findAll(): Promise<Empresario[]>;
    findOne(id: number): Promise<Empresario>;
    update(id: number, { email, name, password, cnpj, bairro, cep, cidade, estado, numero, rua, telefone, }: UpdateEmpresarioDto): Promise<void>;
    remove(id: number): Promise<void>;
    findByEmail(email: string): Promise<Empresario>;
}
