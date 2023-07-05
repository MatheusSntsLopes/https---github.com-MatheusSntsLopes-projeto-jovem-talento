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
    try {
      return this.candidatoVaga.findAll({
        include: [
          {
            model: Candidato,
            attributes: ['name', 'telefone', 'rua', 'estado', 'cidade', 'cep'],
          },
          Vaga,
        ],
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findOne(id: number): Promise<CandidatoVaga> {
    try {
      const candidatoVagaEncontrado: CandidatoVaga =
        await this.candidatoVaga.findOne({
          where: { id },
          include: [
            {
              model: Candidato,
              attributes: [
                'name',
                'telefone',
                'rua',
                'estado',
                'cidade',
                'cep',
              ],
            },
            Vaga,
          ],
        });

      if (!candidatoVagaEncontrado) {
        throw new NotFoundException('Candidato não encontrado.');
      }

      return candidatoVagaEncontrado;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
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
    try {
      const candidatoexist: CandidatoVaga = await this.candidatoVaga.findByPk(
        id,
      );

      if (!candidatoexist) {
        throw new Error('CandidatoVaga não existe');
      }

      await this.candidatoVaga.destroy({ where: { id } });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findCandidato(vagaId: number): Promise<CandidatoVaga> {
    try {
      const vagaCandidato: CandidatoVaga = await this.candidatoVaga.findOne({
        where: { vagaId },
        include: [
          {
            model: Candidato,
            attributes: ['name'],
          },
        ],
      });
      return vagaCandidato;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findAllCandidatoVaga(candidatoId:number): Promise<CandidatoVaga[]> {
    try {
      const candidatoVaga:CandidatoVaga[] = await this.candidatoVaga.findAll({
        where: {candidatoId},
        include: [
          {
            model: Vaga,
          },
        ],
      });
      return candidatoVaga;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findAllVagaCandidato(vagaId:number): Promise<CandidatoVaga[]> {
    try {
      const candidatoVaga:CandidatoVaga[] = await this.candidatoVaga.findAll({
        where: {vagaId},
        include: [
          {
            model: Candidato,
            attributes:['name', 'cpf', 'telefone', 'estado', 'cidade','cep','bairro', 'rua'],
          },
        ],
      });
      return candidatoVaga;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
