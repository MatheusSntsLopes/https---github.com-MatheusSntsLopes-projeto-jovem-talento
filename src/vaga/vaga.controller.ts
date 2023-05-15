import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VagaService } from './vaga.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { JwtAuthGuard } from 'src/authen/guards/jwt-auth.guard';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVagaDto: CreateVagaDto) {
    return this.vagaService.create(createVagaDto);
  }

  @Get()
  findAll() {
    return this.vagaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vagaService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateVagaDto: UpdateVagaDto) {
    return this.vagaService.update(+id, updateVagaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vagaService.remove(+id);
  }
}
