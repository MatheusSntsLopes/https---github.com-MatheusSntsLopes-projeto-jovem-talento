import { PartialType } from '@nestjs/mapped-types';
import { CreateVagaDto } from './create-vaga.dto';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class UpdateVagaDto extends PartialType(CreateVagaDto) {
  @IsNotEmpty()
  @IsString()
  formacao: string;

  @IsNotEmpty()
  @IsString()
  experiencia: string;

  @IsNotEmpty()
  @IsString()
  habilidade: string;

  @IsNotEmpty()
  @IsInt()
  quantidade: number;

  @IsNotEmpty()
  @IsNumber()
  salario: number;
}
