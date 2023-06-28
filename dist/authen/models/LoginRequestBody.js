"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestBody = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'email@email.com',
        description: `O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.`,
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginRequestBody.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alo1234@',
        description: `É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente é necessário informar uma senha.`,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginRequestBody.prototype, "password", void 0);
exports.LoginRequestBody = LoginRequestBody;
//# sourceMappingURL=LoginRequestBody.js.map