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
exports.Candidato = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const candidato_vaga_entity_1 = require("../../candidato-vaga/entities/candidato-vaga.entity");
const curriculo_entity_1 = require("../../curriculo/entities/curriculo.entity");
let Candidato = class Candidato extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Candidato.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Candidato.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], Candidato.prototype, "cpf", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false }),
    __metadata("design:type", Date)
], Candidato.prototype, "data_nascimento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], Candidato.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "telefone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "estado", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "cidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "bairro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "rua", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, defaultValue: '' }),
    __metadata("design:type", String)
], Candidato.prototype, "numero", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Candidato.prototype, "cep", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => candidato_vaga_entity_1.CandidatoVaga),
    __metadata("design:type", Array)
], Candidato.prototype, "candidatoVaga", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => curriculo_entity_1.Curriculo),
    __metadata("design:type", curriculo_entity_1.Curriculo)
], Candidato.prototype, "curriculo", void 0);
Candidato = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Candidato' })
], Candidato);
exports.Candidato = Candidato;
//# sourceMappingURL=candidato.entity.js.map