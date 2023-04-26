import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthController } from './authentication.controller';
import { CandidatoModule } from 'src/candidato/candidato.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './dto/auth.constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './authentication.guard';
@Module({
  imports: [
    CandidatoModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
