import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { STATUS_TIPO } from '../constants/Status.tipo';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCandidatoVagaDto {
 @ApiProperty({
    example:
      'INDEFERIDO,INTERESSADO,SELECIONADO, PARA_ENTREVISTA,DEFERIDO,ANALISE',
    description: `Defina um status para o tipo`,
  })
  // @IsEnum(STATUS_TIPO)
  //status: STATUS_TIPO.INTERESSADO;

  @IsNotEmpty()
  @IsNumber()
  candidatoId: number;

  @IsNotEmpty()
  @IsNumber()
  vagaId: number;
}
