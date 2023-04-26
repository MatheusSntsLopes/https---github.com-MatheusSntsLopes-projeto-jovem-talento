import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresarioDto } from './create-empresario.dto';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateEmpresarioDto extends PartialType(CreateEmpresarioDto) {
  @MinLength(11)
  @IsNotEmpty()
  telefone: string;

  @IsNotEmpty()
  @IsInt()
  cep: number;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  numero: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsDate()
  @IsNotEmpty()
  data_nascimento: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  rua: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  senha: string;
}
