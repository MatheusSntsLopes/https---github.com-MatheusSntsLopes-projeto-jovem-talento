import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EmpresarioService } from './empresario.service';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';
import { Empresario } from './entities/empresario.entity';
import { JwtAuthGuard } from 'src/authen/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('empresario')
@Controller('empresario')
export class EmpresarioController {
  constructor(private readonly empresarioService: EmpresarioService) {}

  @Post()
  create(
    @Body() createEmpresarioDto: CreateEmpresarioDto,
  ): Promise<Empresario> {
    return this.empresarioService.create(createEmpresarioDto);
  }

  @Get()
  findAll(): Promise<Empresario[]> {
    return this.empresarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Empresario> {
    return this.empresarioService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpresarioDto: UpdateEmpresarioDto,
  ): Promise<void> {
    return this.empresarioService.update(+id, updateEmpresarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.empresarioService.remove(+id);
  }
}
