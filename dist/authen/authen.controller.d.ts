import { AuthenService } from './authen.service';
import { UserToken } from './models/UserToken';
export declare class AuthenController {
    private readonly authService;
    constructor(authService: AuthenService);
    login(req: any): Promise<UserToken>;
}
