import { Module } from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CurriculoController } from './curriculo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Curriculo } from './entities/curriculo.entity';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [SequelizeModule.forFeature([Curriculo])],
  controllers: [CurriculoController],
  providers: [CurriculoService],
})
export class CurriculoModule {}
