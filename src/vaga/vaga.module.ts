import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';
import { Vaga } from './entities/vaga.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthenModule } from 'src/authen/authen.module';

@Module({
  imports: [SequelizeModule.forFeature([Vaga])],
  controllers: [VagaController],
  providers: [VagaService],
})
export class VagaModule {}
