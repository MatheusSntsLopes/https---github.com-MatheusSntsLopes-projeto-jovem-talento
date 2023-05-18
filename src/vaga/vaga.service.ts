import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { Vaga } from './entities/vaga.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Empresario } from 'src/empresario/entities/empresario.entity';

@Injectable()
export class VagaService {
  constructor(@InjectModel(Vaga) private readonly vaga: typeof Vaga) {}

  async create(vagaDto: CreateVagaDto): Promise<Vaga> {
    try {
      const vagaNova = {
        ...vagaDto,
      };
      const vagaCriada: Vaga = await this.vaga.create(vagaNova);

      return vagaCriada;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  findAll(): Promise<Vaga[]> {
    return this.vaga.findAll();
  }

  async findOne(id: number): Promise<Vaga> {
    const vagaEncontrada: Vaga = await this.vaga.findOne({
      where: { id },
      include: {
        model: Empresario,
        attributes: ['name', 'telefone', 'rua', 'estado', 'cidade', 'cep'],
      },
    });

    if (!vagaEncontrada) {
      throw new NotFoundException('Vaga não encontrada');
    }

    return vagaEncontrada;
  }

  async update(
    id: number,
    { formacao, experiencia, habilidade, quantidade, salario }: UpdateVagaDto,
  ): Promise<Vaga> {
    try {
      const vagaExiste: Vaga = await this.vaga.findByPk(id, {
        rejectOnEmpty: true,
      });

      if (!vagaExiste) {
        throw new Error('Vaga não existe');
      }

      const novosDados: Vaga = await vagaExiste.update({
        formacao,
        experiencia,
        habilidade,
        quantidade,
        salario,
      });

      return novosDados;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async remove(id: number) {
    const vagaExiste: Vaga = await this.vaga.findByPk(id);

    if (!vagaExiste) {
      throw new Error('Vaga não existe');
    }

    await this.vaga.destroy({ where: { id } });
  }
}
