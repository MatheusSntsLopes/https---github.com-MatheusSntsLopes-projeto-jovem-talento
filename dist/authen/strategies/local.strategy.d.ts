import { Strategy } from 'passport-local';
import { AuthenService } from '../authen.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthenService);
    validate(email: string, password: string): Promise<import("../../candidato/entities/candidato.entity").Candidato | import("../../empresario/entities/empresario.entity").Empresario>;
}
export {};
