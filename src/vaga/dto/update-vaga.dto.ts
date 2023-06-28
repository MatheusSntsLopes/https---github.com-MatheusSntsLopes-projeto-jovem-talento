import { PartialType } from '@nestjs/mapped-types';
import { CreateVagaDto } from './create-vaga.dto';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateVagaDto extends PartialType(CreateVagaDto) {
  @ApiProperty({
    example:
      'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
    description: `Serve para descrever a vaga.`,
  })
  @IsNotEmpty()
  @IsString()
  formacao: string;

  @ApiProperty({
    example:
      'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
    description: `Serve para descrever a vaga.`,
  })
  @IsNotEmpty()
  @IsString()
  experiencia: string;

  @ApiProperty({
    example:
      'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
    description: `Serve para descrever a vaga.`,
  })
  @IsNotEmpty()
  @IsString()
  habilidade: string;

  @ApiProperty({
    example:
      'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
    description: `Serve para descrever a vaga.`,
  })
  @IsNotEmpty()
  @IsInt()
  quantidade: number;

  @ApiProperty({
    example: '1300.23',
    description: `Serve para descrever a vaga.`,
  })
  @IsNotEmpty()
  @IsNumber()
  salario: number;

  @IsNotEmpty()
  @IsNumber()
  empresarioId: number;
}
