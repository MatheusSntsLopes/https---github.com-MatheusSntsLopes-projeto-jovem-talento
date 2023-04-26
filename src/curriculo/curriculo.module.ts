import { Module } from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CurriculoController } from './curriculo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Curriculo } from './entities/curriculo.entity';
@Module({
  controllers: [CurriculoController],
  providers: [CurriculoService],
})
export class CurriculoModule {}
