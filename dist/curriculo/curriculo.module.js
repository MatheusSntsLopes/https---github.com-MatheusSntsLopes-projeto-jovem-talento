"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurriculoModule = void 0;
const common_1 = require("@nestjs/common");
const curriculo_service_1 = require("./curriculo.service");
const curriculo_controller_1 = require("./curriculo.controller");
const sequelize_1 = require("@nestjs/sequelize");
const curriculo_entity_1 = require("./entities/curriculo.entity");
let CurriculoModule = class CurriculoModule {
};
CurriculoModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([curriculo_entity_1.Curriculo])],
        controllers: [curriculo_controller_1.CurriculoController],
        providers: [curriculo_service_1.CurriculoService],
    })
], CurriculoModule);
exports.CurriculoModule = CurriculoModule;
//# sourceMappingURL=curriculo.module.js.map