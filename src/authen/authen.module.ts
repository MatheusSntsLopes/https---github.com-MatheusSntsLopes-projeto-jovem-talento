import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmpresarioModule } from '../empresario/empresario.module';
import { AuthenController } from './authen.controller';
import { AuthenService } from './authen.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';

@Module({
  imports: [
    EmpresarioModule,
    PassportModule,
    JwtModule.register({
      secret: 'teste',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthenController],
  providers: [AuthenService, LocalStrategy, JwtStrategy],
})
export class AuthenModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
