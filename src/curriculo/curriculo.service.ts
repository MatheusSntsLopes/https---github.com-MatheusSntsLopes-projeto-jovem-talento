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
    try {
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
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findOne(id: number): Promise<Curriculo> {
    try {
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
    } catch (e) {
      throw new BadRequestException(e.message);
    }
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
      const curriculoExiste: Curriculo = await this.curriculo.findByPk(id, {
        rejectOnEmpty: true,
      });

      if (!curriculoExiste) {
        throw new Error('Curriculo não existe');
      }

      const novosDados: Curriculo = await curriculoExiste.update({
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
    try {
      const curriculo = await this.curriculo.findByPk(id);

      if (!curriculo) {
        throw new Error('Usuario não existe');
      }

      await this.curriculo.destroy({ where: { id } });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
