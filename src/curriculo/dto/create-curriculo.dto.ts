import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
export class CreateCurriculoDto {
  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
    description: `Informar a biografia para melhorar o curriculo.`,
  })
  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  biografia: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
    description: `Informar a formação para melhorar o curriculo.`,
  })
  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  formacao: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
    description: `Informar a experiêcia para melhorar o curriculo.`,
  })
  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  experiencia: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
    description: `Informar a competência para melhorar o curriculo.`,
  })
  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  competencia: string;

  @ApiProperty({
    example:
      'lorem ipsum dolor sit amet, consectetur adip  euismod  tempor incididunt ut lab',
    description: `Informar a habilidade para melhorar o curriculo.`,
  })
  @MinLength(20)
  @IsNotEmpty()
  @IsString()
  habilidade: string;

  @ApiProperty({
    example: '1',
    description: `Informar o id do candidato.`,
  })
  @IsNumber()
  @IsNotEmpty()
  candidatoId: number;
}
