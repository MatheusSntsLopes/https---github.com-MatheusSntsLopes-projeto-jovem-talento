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
exports.CandidatoVaga = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const candidato_entity_1 = require("../../candidato/entities/candidato.entity");
const vaga_entity_1 = require("../../vaga/entities/vaga.entity");
const Status_tipo_1 = require("../constants/Status.tipo");
let CandidatoVaga = class CandidatoVaga extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], CandidatoVaga.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        allowNull: true,
        values: Object.values(Status_tipo_1.STATUS_TIPO),
    }),
    __metadata("design:type", String)
], CandidatoVaga.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => candidato_entity_1.Candidato),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        references: { model: candidato_entity_1.Candidato, key: 'id' },
    }),
    __metadata("design:type", Number)
], CandidatoVaga.prototype, "candidatoId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => vaga_entity_1.Vaga),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        references: { model: vaga_entity_1.Vaga, key: 'id' },
    }),
    __metadata("design:type", Number)
], CandidatoVaga.prototype, "vagaId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => candidato_entity_1.Candidato),
    __metadata("design:type", candidato_entity_1.Candidato)
], CandidatoVaga.prototype, "candidato", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => vaga_entity_1.Vaga),
    __metadata("design:type", vaga_entity_1.Vaga)
], CandidatoVaga.prototype, "vaga", void 0);
CandidatoVaga = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'CandidatoVaga' })
], CandidatoVaga);
exports.CandidatoVaga = CandidatoVaga;
//# sourceMappingURL=candidato-vaga.entity.js.map