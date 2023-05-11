import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';
import { Empresario } from './entities/empresario.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { Vaga } from 'src/vaga/entities/vaga.entity';
@Injectable()
export class EmpresarioService {
  constructor(
    @InjectModel(Empresario) private readonly empresario: typeof Empresario,
  ) {}

  async create(empresarioDto: CreateEmpresarioDto): Promise<Empresario> {
    try {
      const empresarioNovo = {
        ...empresarioDto,
        password: await bcrypt.hash(empresarioDto.password, 10),
      };
      const empresarioCriado: Empresario = await this.empresario.create(
        empresarioNovo,
      );

      return empresarioCriado;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  findAll(): Promise<Empresario[]> {
    return this.empresario.findAll({
      attributes: { exclude: ['senha'] },
      include: Vaga,
    });
  }

  async findOne(id: number): Promise<Empresario> {
    const empresarioEncontrado: Empresario = await this.empresario.findOne({
      where: { id },
      attributes: { exclude: ['senha'] },
      include: Vaga,
    });

    if (!empresarioEncontrado) {
      throw new NotFoundException('Candidato não encontrado.');
    }

    return empresarioEncontrado;
  }

  async update(
    id: number,
    {
      email,
      name,
      password,
      cnpj,
      bairro,
      cep,
      cidade,
      estado,
      numero,
      rua,
      telefone,
    }: UpdateEmpresarioDto,
  ): Promise<Empresario> {
    try {
      const empresarioExiste: Empresario = await this.empresario.findByPk(id, {
        rejectOnEmpty: true,
      });

      if (!empresarioExiste) {
        throw new Error('Usuario não existe');
      }

      const novosDados: Empresario = await empresarioExiste.update({
        email,
        name,
        password,
        cnpj,
        bairro,
        cep,
        cidade,
        estado,
        numero,
        rua,
        telefone,
      });

      return novosDados;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async remove(id: number) {
    const empresarioexist: Empresario = await this.empresario.findByPk(id);

    if (!empresarioexist) {
      throw new Error('Usuario não existe');
    }

    await this.empresario.destroy({ where: { id } });
  }

  findByEmail(email: string): Promise<Empresario> {
    return this.empresario.findOne({ where: { email } });
  }
}
