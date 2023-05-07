import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {
  @MinLength(11)
  @IsNotEmpty()
  @IsInt()
  telefone: string;

  @IsNotEmpty()
  cep: number;

  @IsNotEmpty()
  @MinLength(11)
  cpf: string;

  @IsNotEmpty()
  numero: string;

  @IsNotEmpty()
  @IsString()
  name: string;

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
  password: string;

  @IsDateString()
  @IsNotEmpty()
  data_nascimento: Date;
}
