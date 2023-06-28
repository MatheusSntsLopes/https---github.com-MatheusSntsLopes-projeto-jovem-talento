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
exports.CreateEmpresarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmpresarioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '(79)99312-7788',
        description: `Informe o numero do seu celular para obter o codigo de verificação.`,
    }),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '49300000',
        description: `Informe o cep da sua cidade para obter candidatos mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateEmpresarioDto.prototype, "cep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '321.321.332-99',
        description: `Informe o seu cpf para ter autenticidade.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(11),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "cnpj", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123A',
        description: `Informe o numero da sua casa para obter candidatos mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Gabriel Farias',
        description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'email@email.com',
        description: `O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sergipe',
        description: `Informe o nome do seu estado para obter candidatos mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Aracaju',
        description: `Informe o nome da sua cidade para obter candidatos mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Centro',
        description: `Informe o nome do seu bairro para obter candidatos mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "bairro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Rua Jose Augusto Ferreira',
        description: `Informe o nome da sua rua para obter candidatos mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "rua", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alo1234@',
        description: `É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente é necessário informar uma senha.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(32),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    }),
    __metadata("design:type", String)
], CreateEmpresarioDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '03/03/2000',
        description: `Informe a data de nascimento para que todos saibam sua idade.`,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateEmpresarioDto.prototype, "data_nascimento", void 0);
exports.CreateEmpresarioDto = CreateEmpresarioDto;
//# sourceMappingURL=create-empresario.dto.js.map