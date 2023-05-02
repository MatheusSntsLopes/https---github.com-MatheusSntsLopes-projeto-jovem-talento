import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { Curriculo } from './entities/curriculo.entity';

@Controller('curriculo')
export class CurriculoController {
  constructor(private readonly curriculoService: CurriculoService) {}

  @Post()
  create(@Body() createCurriculoDto: CreateCurriculoDto): Promise<Curriculo> {
    return this.curriculoService.create(createCurriculoDto);
  }

  @Get()
  findAll(): Promise<Curriculo[]> {
    return this.curriculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Curriculo> {
    return this.curriculoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurriculoDto: UpdateCurriculoDto,
  ): Promise<Curriculo> {
    return this.curriculoService.update(+id, updateCurriculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculoService.remove(+id);
  }
}
