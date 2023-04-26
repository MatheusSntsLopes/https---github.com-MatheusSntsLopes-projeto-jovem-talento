import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresarioService } from './empresario.service';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';

@Controller('empresario')
export class EmpresarioController {
  constructor(private readonly empresarioService: EmpresarioService) {}

  @Post()
  create(@Body() createEmpresarioDto: CreateEmpresarioDto) {
    return this.empresarioService.create(createEmpresarioDto);
  }

  @Get()
  findAll() {
    return this.empresarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresarioDto: UpdateEmpresarioDto) {
    return this.empresarioService.update(+id, updateEmpresarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresarioService.remove(+id);
  }
}
