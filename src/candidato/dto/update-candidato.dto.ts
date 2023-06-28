import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidatoDto } from './create-candidato.dto';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {
  @ApiProperty({
    example: '(79)99312-7788',
    description: `Informe o numero do seu celular para obter o codigo de verificação.`,
  })
  @MinLength(10)
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({
    example: '49300000',
    description: `Informe o cep da sua cidade para obter vagas mais proximas a sua localidade.`,
  })
  @IsNotEmpty()
  cep: number;

  @ApiProperty({
    example: '321.321.332-99',
    description: `Informe o seu cpf para ter autenticidade.`,
  })
  @IsNotEmpty()
  @MinLength(11)
  cpf: string;

  @ApiProperty({
    example: '123A',
    description: `Informe o numero da sua casa para obter vagas mais proximas a sua localidade.`,
  })
  @IsNotEmpty()
  numero: string;

  @ApiProperty({
    example: 'Gabriel Farias',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'email@email.com',
    description: `O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.`,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Sergipe',
    description: `Informe o nome do seu estado para obter vagas mais proximas a sua localidade.`,
  })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({
    example: 'Aracaju',
    description: `Informe o nome da sua cidade para obter vagas mais proximas a sua localidade.`,
  })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({
    example: 'Centro',
    description: `Informe o nome do seu bairro para obter vagas mais proximas a sua localidade.`,
  })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({
    example: 'Rua Jose Augusto Ferreira',
    description: `Informe o nome da sua rua para obter vagas mais proximas a sua localidade.`,
  })
  @IsString()
  @IsNotEmpty()
  rua: string;

  @ApiProperty({
    example: 'Alo1234@',
    description: `É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente é necessário informar uma senha.`,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({
    example: '03/03/2000',
    description: `Informe a data de nascimento para que todos saibam sua idade.`,
  })
  @IsDateString()
  @IsNotEmpty()
  data_nascimento: Date;
}
