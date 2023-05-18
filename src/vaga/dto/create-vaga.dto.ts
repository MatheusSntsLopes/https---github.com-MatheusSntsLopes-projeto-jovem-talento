import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateVagaDto {
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

  @IsNotEmpty()
  @IsNumber()
  empresarioId: number;
}
