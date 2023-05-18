import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Curriculo } from './entities/curriculo.entity';
import { Candidato } from 'src/candidato/entities/candidato.entity';

@Injectable()
export class CurriculoService {
  constructor(
    @InjectModel(Curriculo) private readonly curriculo: typeof Curriculo,
  ) {}

  async create(createCurriculoDto: CreateCurriculoDto): Promise<Curriculo> {
    try {
      const curriculoNovo = {
        ...createCurriculoDto,
      };
      const curriculoCriado: Curriculo = await this.curriculo.create(
        curriculoNovo,
      );

      return curriculoCriado;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  findAll(): Promise<Curriculo[]> {
    return this.curriculo.findAll({
      include: {
        model: Candidato,
        attributes: [
          'name',
          'telefone',
          'rua',
          'estado',
          'cidade',
          'cep',
          'bairro',
          'numero',
        ],
      },
    });
  }

  async findOne(id: number): Promise<Curriculo> {
    const curriculo: Curriculo = await this.curriculo.findOne({
      where: { id },
      include: {
        model: Candidato,
        attributes: ['name', 'telefone', 'rua', 'estado', 'cidade', 'cep'],
      },
    });

    if (!curriculo) {
      throw new NotFoundException('Curriculo não encontrado.');
    }

    return curriculo;
  }

  async update(
    id: number,
    {
      biografia,
      formacao,
      habilidade,
      competencia,
      experiencia,
    }: UpdateCurriculoDto,
  ): Promise<Curriculo> {
    try {
      const curriculoExiste = await this.curriculo.findByPk(id, {
        rejectOnEmpty: true,
      });

      if (!curriculoExiste) {
        throw new Error('Curriculo não existe');
      }

      const novosDados = await curriculoExiste.update({
        biografia,
        formacao,
        habilidade,
        competencia,
        experiencia,
      });

      return novosDados;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async remove(id: number) {
    const curriculo = await this.curriculo.findByPk(id);

    if (!curriculo) {
      throw new Error('Usuario não existe');
    }

    await this.curriculo.destroy({ where: { id } });
  }
}
