import { Module } from '@nestjs/common';
import { EmpresarioService } from './empresario.service';
import { EmpresarioController } from './empresario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Empresario } from './entities/empresario.entity';
import { AuthenModule } from 'src/authen/authen.module';

@Module({
  imports: [SequelizeModule.forFeature([Empresario])],
  controllers: [EmpresarioController],
  providers: [EmpresarioService],
  exports: [EmpresarioService],
})
export class EmpresarioModule {}
