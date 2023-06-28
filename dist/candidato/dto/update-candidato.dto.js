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
exports.UpdateCandidatoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_candidato_dto_1 = require("./create-candidato.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateCandidatoDto extends (0, mapped_types_1.PartialType)(create_candidato_dto_1.CreateCandidatoDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '(79)99312-7788',
        description: `Informe o numero do seu celular para obter o codigo de verificação.`,
    }),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '49300000',
        description: `Informe o cep da sua cidade para obter vagas mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateCandidatoDto.prototype, "cep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '321.321.332-99',
        description: `Informe o seu cpf para ter autenticidade.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(11),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123A',
        description: `Informe o numero da sua casa para obter vagas mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Gabriel Farias',
        description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'email@email.com',
        description: `O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sergipe',
        description: `Informe o nome do seu estado para obter vagas mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Aracaju',
        description: `Informe o nome da sua cidade para obter vagas mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Centro',
        description: `Informe o nome do seu bairro para obter vagas mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "bairro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Rua Jose Augusto Ferreira',
        description: `Informe o nome da sua rua para obter vagas mais proximas a sua localidade.`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCandidatoDto.prototype, "rua", void 0);
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
], UpdateCandidatoDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '03/03/2000',
        description: `Informe a data de nascimento para que todos saibam sua idade.`,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateCandidatoDto.prototype, "data_nascimento", void 0);
exports.UpdateCandidatoDto = UpdateCandidatoDto;
//# sourceMappingURL=update-candidato.dto.js.map