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
    try {
      return this.empresario.findAll({
        attributes: { exclude: ['password', 'email'] },
        include: Vaga,
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findOne(id: number): Promise<Empresario> {
    const empresarioEncontrado: Empresario = await this.empresario.findOne({
      where: { id },
      attributes: { exclude: ['password', 'email'] },
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
  ): Promise<void> {
    try {
      const empresarioExiste: Empresario = await this.empresario.findByPk(id, {
        rejectOnEmpty: true,
      });

      if (!empresarioExiste) {
        throw new Error('Empresario não existe');
      }

      await empresarioExiste.update({
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
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async remove(id: number) {
    try {
      const empresarioexist: Empresario = await this.empresario.findByPk(id);

      if (!empresarioexist) {
        throw new Error('Usuario não existe');
      }

      await this.empresario.destroy({ where: { id } });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  findByEmail(email: string): Promise<Empresario> {
    return this.empresario.findOne({ where: { email } });
  }
}
