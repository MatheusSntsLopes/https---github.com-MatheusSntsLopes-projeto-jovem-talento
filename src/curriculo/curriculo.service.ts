import { Injectable } from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';

@Injectable()
export class CurriculoService {
  create(createCurriculoDto: CreateCurriculoDto) {
    return 'This action adds a new curriculo';
  }

  findAll() {
    return `This action returns all curriculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curriculo`;
  }

  update(id: number, updateCurriculoDto: UpdateCurriculoDto) {
    return `This action updates a #${id} curriculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} curriculo`;
  }
}
