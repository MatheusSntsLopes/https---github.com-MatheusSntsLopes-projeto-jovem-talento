import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatoModule } from './candidato/candidato.module';
import { CurriculoModule } from './curriculo/curriculo.module';
import { EmpresarioModule } from './empresario/empresario.module';
import { VagaModule } from './vaga/vaga.module';
import { CandidatoVagaModule } from './candidato-vaga/candidato-vaga.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Candidato } from './candidato/entities/candidato.entity';
import { Curriculo } from './curriculo/entities/curriculo.entity';
import { Empresario } from './empresario/entities/empresario.entity';
import { Vaga } from './vaga/entities/vaga.entity';
import { CandidatoVaga } from './candidato-vaga/entities/candidato-vaga.entity';
import { AuthModule } from './auth/auth.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'babar.db.elephantsql.com',
      port: 5432,
      username: 'uxlerkgl',
      password: 'P2_NzkJ2tetr1ZdzQuTGoUeMqSVLx0dC',
      database: 'uxlerkgl',
      autoLoadModels: true,
      synchronize: true,
      models: [Candidato, Curriculo, Empresario, Vaga, CandidatoVaga],
    }),
    CandidatoModule,
    CurriculoModule,
    EmpresarioModule,
    VagaModule,
    CandidatoVagaModule,
    AuthModule,
    AuthModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
