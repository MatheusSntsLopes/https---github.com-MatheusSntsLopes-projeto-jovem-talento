import { Module } from '@nestjs/common';
import { CandidatoVagaService } from './candidato-vaga.service';
import { CandidatoVagaController } from './candidato-vaga.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CandidatoVaga } from './entities/candidato-vaga.entity';
@Module({
  controllers: [CandidatoVagaController],
  providers: [CandidatoVagaService],
})
export class CandidatoVagaModule {}
