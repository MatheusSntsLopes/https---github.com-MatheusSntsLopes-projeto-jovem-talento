import { PartialType } from '@nestjs/mapped-types';
import { CreateCurriculoDto } from './create-curriculo.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateCurriculoDto extends PartialType(CreateCurriculoDto) {
  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  biografia: string;

  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  formacao: string;

  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  experiencia: string;

  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  competencia: string;

  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  habilidade: string;
}
