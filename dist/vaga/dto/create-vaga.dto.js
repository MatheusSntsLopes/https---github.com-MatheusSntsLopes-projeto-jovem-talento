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
exports.CreateVagaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateVagaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
        description: `Serve para descrever a vaga.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVagaDto.prototype, "formacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
        description: `Serve para descrever a vaga.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVagaDto.prototype, "cargo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buscamos um(a) vendedor(a) para fornecer excelente serviço ao cliente e atender às cotas de vendas para nossa empresa. Candidatos com fortes habilidades de comunicação que podem fazer os clientes se sentirem bem-vindos em nossa loja se destacam.',
        description: `Serve para descrever a vaga.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateVagaDto.prototype, "quantidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1300.23',
        description: `Serve para descrever a vaga.`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVagaDto.prototype, "salario", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVagaDto.prototype, "empresarioId", void 0);
exports.CreateVagaDto = CreateVagaDto;
//# sourceMappingURL=create-vaga.dto.js.map