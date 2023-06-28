import { CreateVagaDto } from './create-vaga.dto';
declare const UpdateVagaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVagaDto>>;
export declare class UpdateVagaDto extends UpdateVagaDto_base {
    formacao: string;
    experiencia: string;
    habilidade: string;
    quantidade: number;
    salario: number;
    empresarioId: number;
}
export {};
