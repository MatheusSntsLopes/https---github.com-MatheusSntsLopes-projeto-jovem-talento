import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoVagaDto } from './create-candidato-vaga.dto';
import { STATUS_TIPO } from '../constants/Status.tipo';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateCandidatoVagaDto extends PartialType(
  CreateCandidatoVagaDto,
) {
  @IsEnum(STATUS_TIPO)
  status: STATUS_TIPO.INTERESSADO;
}
