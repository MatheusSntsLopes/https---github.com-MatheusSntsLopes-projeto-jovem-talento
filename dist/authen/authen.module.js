"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const empresario_module_1 = require("../empresario/empresario.module");
const authen_controller_1 = require("./authen.controller");
const authen_service_1 = require("./authen.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
const login_validation_middleware_1 = require("./middlewares/login-validation.middleware");
const candidato_module_1 = require("../candidato/candidato.module");
let AuthenModule = class AuthenModule {
    configure(consumer) {
        consumer.apply(login_validation_middleware_1.LoginValidationMiddleware).forRoutes('login');
    }
};
AuthenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            empresario_module_1.EmpresarioModule,
            candidato_module_1.CandidatoModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'teste',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [authen_controller_1.AuthenController],
        providers: [authen_service_1.AuthenService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
    })
], AuthenModule);
exports.AuthenModule = AuthenModule;
//# sourceMappingURL=authen.module.js.map