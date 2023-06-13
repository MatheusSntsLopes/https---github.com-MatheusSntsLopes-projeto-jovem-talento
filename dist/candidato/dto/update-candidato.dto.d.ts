import { CreateCandidatoDto } from './create-candidato.dto';
declare const UpdateCandidatoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCandidatoDto>>;
export declare class UpdateCandidatoDto extends UpdateCandidatoDto_base {
    telefone: string;
    cep: number;
    cpf: string;
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
