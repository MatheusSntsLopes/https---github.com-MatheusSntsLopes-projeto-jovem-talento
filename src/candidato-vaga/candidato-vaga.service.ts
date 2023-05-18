import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCandidatoVagaDto } from './dto/create-candidato-vaga.dto';
import { UpdateCandidatoVagaDto } from './dto/update-candidato-vaga.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CandidatoVaga } from './entities/candidato-vaga.entity';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { Vaga } from 'src/vaga/entities/vaga.entity';

@Injectable()
export class CandidatoVagaService {
  constructor(
    @InjectModel(CandidatoVaga)
    private readonly candidatoVaga: typeof CandidatoVaga,
  ) {}

  async create(
    createCandidatoVagaDto: CreateCandidatoVagaDto,
  ): Promise<CandidatoVaga> {
    try {
      const candidatoVagaNovo = {
        ...createCandidatoVagaDto,
      };
      const candidatoCriado: CandidatoVaga = await this.candidatoVaga.create(
        candidatoVagaNovo,
      );

      return candidatoCriado;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  findAll(): Promise<CandidatoVaga[]> {
    return this.candidatoVaga.findAll({
      include: [
        {
          model: Candidato,
          attributes: ['name', 'telefone', 'rua', 'estado', 'cidade', 'cep'],
        },
        Vaga,
      ],
    });
  }

  async findOne(id: number): Promise<CandidatoVaga> {
    const candidatoVagaEncontrado: CandidatoVaga =
      await this.candidatoVaga.findOne({
        where: { id },
        include: [
          {
            model: Candidato,
            attributes: ['name', 'telefone', 'rua', 'estado', 'cidade', 'cep'],
          },
          Vaga,
        ],
      });

    if (!candidatoVagaEncontrado) {
      throw new NotFoundException('Candidato não encontrado.');
    }

    return candidatoVagaEncontrado;
  }

  async update(
    id: number,
    { status }: UpdateCandidatoVagaDto,
  ): Promise<CandidatoVaga> {
    try {
      const candidatoVExiste: CandidatoVaga = await this.candidatoVaga.findByPk(
        id,
        {
          rejectOnEmpty: true,
        },
      );

      if (!candidatoVExiste) {
        throw new Error('Usuario não existe');
      }

      const novosDados: CandidatoVaga = await candidatoVExiste.update({
        status,
      });

      return novosDados;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async remove(id: number) {
    const candidatoexist: CandidatoVaga = await this.candidatoVaga.findByPk(id);

    if (!candidatoexist) {
      throw new Error('CandidatoVaga não existe');
    }

    await this.candidatoVaga.destroy({ where: { id } });
  }
}
