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
import { CandidatoVagaService } from './candidato-vaga.service';
import { CreateCandidatoVagaDto } from './dto/create-candidato-vaga.dto';
import { UpdateCandidatoVagaDto } from './dto/update-candidato-vaga.dto';
import { CandidatoVaga } from './entities/candidato-vaga.entity';
import { JwtAuthGuard } from 'src/authen/guards/jwt-auth.guard';

@Controller('candidato-vaga')
export class CandidatoVagaController {
  constructor(private readonly candidatoVagaService: CandidatoVagaService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidatoVagaDto: UpdateCandidatoVagaDto,
  ): Promise<CandidatoVaga> {
    return this.candidatoVagaService.update(+id, updateCandidatoVagaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatoVagaService.remove(+id);
  }

  @Get('vaga/:vagaId')
  findCandidato(@Param('vagaId') vagaId: string): Promise<CandidatoVaga> {
    return this.candidatoVagaService.findCandidato(+vagaId);
  }
}
