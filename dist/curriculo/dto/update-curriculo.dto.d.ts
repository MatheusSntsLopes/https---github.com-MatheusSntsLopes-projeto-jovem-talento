import { CreateCurriculoDto } from './create-curriculo.dto';
declare const UpdateCurriculoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCurriculoDto>>;
export declare class UpdateCurriculoDto extends UpdateCurriculoDto_base {
    biografia: string;
    formacao: string;
    experiencia: string;
    competencia: string;
    habilidade: string;
}
export {};
