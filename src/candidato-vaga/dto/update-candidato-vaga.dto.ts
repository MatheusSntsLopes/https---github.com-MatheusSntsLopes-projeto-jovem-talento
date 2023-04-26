import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoVagaDto } from './create-candidato-vaga.dto';

export class UpdateCandidatoVagaDto extends PartialType(CreateCandidatoVagaDto) {}
