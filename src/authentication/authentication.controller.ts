import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticationRequest } from './models/AuthenticationRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { UserToken } from './models/UserToken';

@Controller('empresario')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthenticationRequest): Promise<UserToken> {
    return this.authService.login(req.user);
  }
}
