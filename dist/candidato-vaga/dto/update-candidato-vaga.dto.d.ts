import { CreateCandidatoVagaDto } from './create-candidato-vaga.dto';
import { STATUS_TIPO } from '../constants/Status.tipo';
declare const UpdateCandidatoVagaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCandidatoVagaDto>>;
export declare class UpdateCandidatoVagaDto extends UpdateCandidatoVagaDto_base {
    status: STATUS_TIPO.INTERESSADO;
}
export {};
