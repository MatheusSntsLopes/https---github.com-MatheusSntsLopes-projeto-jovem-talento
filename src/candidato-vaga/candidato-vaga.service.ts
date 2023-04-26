import { Injectable } from '@nestjs/common';
import { CreateCandidatoVagaDto } from './dto/create-candidato-vaga.dto';
import { UpdateCandidatoVagaDto } from './dto/update-candidato-vaga.dto';

@Injectable()
export class CandidatoVagaService {
  create(createCandidatoVagaDto: CreateCandidatoVagaDto) {
    return 'This action adds a new candidatoVaga';
  }

  findAll() {
    return `This action returns all candidatoVaga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidatoVaga`;
  }

  update(id: number, updateCandidatoVagaDto: UpdateCandidatoVagaDto) {
    return `This action updates a #${id} candidatoVaga`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidatoVaga`;
  }
}
