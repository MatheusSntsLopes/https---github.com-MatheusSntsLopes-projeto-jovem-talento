import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  UseGuards,
  Header,
} from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { JwtAuthGuard } from 'src/authen/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('candidato')
@Controller('candidato')
export class CandidatoController {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Post()
  create(@Body() createCandidatoDto: CreateCandidatoDto) {
    return this.candidatoService.create(createCandidatoDto);
  }

  @Get()
  findAll() {
    return this.candidatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.candidatoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidatoDto: UpdateCandidatoDto,
  ) {
    return this.candidatoService.update(+id, updateCandidatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatoService.remove(+id);
  }
}
