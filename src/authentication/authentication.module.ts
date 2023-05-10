import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LocalStrategy } from './strategies/local.strategy';
import { CandidatoModule } from 'src/authentication/candidato.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    CandidatoModule,
    PassportModule,
    JwtModule.register({
      secret: 'process.env.JWT_TOKEN',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
