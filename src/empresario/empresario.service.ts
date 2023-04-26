import { Injectable } from '@nestjs/common';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';

@Injectable()
export class EmpresarioService {
  create(createEmpresarioDto: CreateEmpresarioDto) {
    return 'This action adds a new empresario';
  }

  findAll() {
    return `This action returns all empresario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empresario`;
  }

  update(id: number, updateEmpresarioDto: UpdateEmpresarioDto) {
    return `This action updates a #${id} empresario`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresario`;
  }
}
