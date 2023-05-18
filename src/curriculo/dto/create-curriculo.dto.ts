import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
export class CreateCurriculoDto {
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

  @IsNumber()
  @IsNotEmpty()
  candidatoId: number;
}
