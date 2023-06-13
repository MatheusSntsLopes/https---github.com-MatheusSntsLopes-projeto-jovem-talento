import { AuthenService } from './authen.service';
export declare class AuthenController {
    private readonly authService;
    constructor(authService: AuthenService);
    login(req: any): Promise<import("./models/UserToken").UserToken>;
}
