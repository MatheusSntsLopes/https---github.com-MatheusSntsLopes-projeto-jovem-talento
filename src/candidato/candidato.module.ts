import { Module } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CandidatoController } from './candidato.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Candidato } from './entities/candidato.entity';
import { Curriculo } from 'src/curriculo/entities/curriculo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Candidato]), Curriculo],
  controllers: [CandidatoController],
  providers: [CandidatoService],
  exports: [CandidatoService],
})
export class CandidatoModule {}
