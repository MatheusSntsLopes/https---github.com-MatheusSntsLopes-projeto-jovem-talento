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
import { CandidatoVagaService } from './candidato-vaga.service';
import { CreateCandidatoVagaDto } from './dto/create-candidato-vaga.dto';
import { UpdateCandidatoVagaDto } from './dto/update-candidato-vaga.dto';
import { CandidatoVaga } from './entities/candidato-vaga.entity';

@Controller('candidato-vaga')
export class CandidatoVagaController {
  constructor(private readonly candidatoVagaService: CandidatoVagaService) {}

  @Post()
  create(
    @Body() createCandidatoVagaDto: CreateCandidatoVagaDto,
  ): Promise<CandidatoVaga> {
    return this.candidatoVagaService.create(createCandidatoVagaDto);
  }

  @Get()
  findAll(): Promise<CandidatoVaga[]> {
    return this.candidatoVagaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CandidatoVaga> {
    return this.candidatoVagaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidatoVagaDto: UpdateCandidatoVagaDto,
  ): Promise<CandidatoVaga> {
    return this.candidatoVagaService.update(+id, updateCandidatoVagaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatoVagaService.remove(+id);
  }
}
