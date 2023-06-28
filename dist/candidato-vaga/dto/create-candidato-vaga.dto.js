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
exports.CreateCandidatoVagaDto = void 0;
const class_validator_1 = require("class-validator");
const Status_tipo_1 = require("../constants/Status.tipo");
const swagger_1 = require("@nestjs/swagger");
class CreateCandidatoVagaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'INDEFERIDO,INTERESSADO,SELECIONADO, PARA_ENTREVISTA,DEFERIDO,ANALISE',
        description: `Defina um status para o tipo`,
    }),
    (0, class_validator_1.IsEnum)(Status_tipo_1.STATUS_TIPO),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCandidatoVagaDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCandidatoVagaDto.prototype, "candidatoId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCandidatoVagaDto.prototype, "vagaId", void 0);
exports.CreateCandidatoVagaDto = CreateCandidatoVagaDto;
//# sourceMappingURL=create-candidato-vaga.dto.js.map