import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { STATUS_TIPO } from '../constants/Status.tipo';
export class CreateCandidatoVagaDto {
  @IsEnum(STATUS_TIPO)
  @IsNotEmpty()
  status?: STATUS_TIPO;

  @IsNotEmpty()
  @IsNumber()
  candidatoId: number;

  @IsNotEmpty()
  @IsNumber()
  vagaId: number;
}
