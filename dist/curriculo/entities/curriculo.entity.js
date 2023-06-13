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
exports.Curriculo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const candidato_entity_1 = require("../../candidato/entities/candidato.entity");
let Curriculo = class Curriculo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Curriculo.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => candidato_entity_1.Candidato),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        references: { model: candidato_entity_1.Candidato, key: 'id' },
    }),
    __metadata("design:type", Number)
], Curriculo.prototype, "candidatoId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Curriculo.prototype, "biografia", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Curriculo.prototype, "formacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Curriculo.prototype, "experiencia", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Curriculo.prototype, "competencia", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Curriculo.prototype, "habilidade", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => candidato_entity_1.Candidato),
    __metadata("design:type", candidato_entity_1.Candidato)
], Curriculo.prototype, "candidato", void 0);
Curriculo = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Curriculo' })
], Curriculo);
exports.Curriculo = Curriculo;
//# sourceMappingURL=curriculo.entity.js.map