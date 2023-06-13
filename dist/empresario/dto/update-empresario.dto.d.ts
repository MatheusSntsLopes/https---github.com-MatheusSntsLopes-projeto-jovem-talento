import { CreateEmpresarioDto } from './create-empresario.dto';
declare const UpdateEmpresarioDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEmpresarioDto>>;
export declare class UpdateEmpresarioDto extends UpdateEmpresarioDto_base {
    telefone: string;
    cep: number;
    cnpj: string;
    numero: string;
    name: string;
    email: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    password: string;
    data_nascimento: Date;
}
export {};
