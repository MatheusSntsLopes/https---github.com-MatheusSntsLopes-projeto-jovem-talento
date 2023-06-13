"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaModule = void 0;
const common_1 = require("@nestjs/common");
const vaga_service_1 = require("./vaga.service");
const vaga_controller_1 = require("./vaga.controller");
const vaga_entity_1 = require("./entities/vaga.entity");
const sequelize_1 = require("@nestjs/sequelize");
let VagaModule = class VagaModule {
};
VagaModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([vaga_entity_1.Vaga])],
        controllers: [vaga_controller_1.VagaController],
        providers: [vaga_service_1.VagaService],
    })
], VagaModule);
exports.VagaModule = VagaModule;
//# sourceMappingURL=vaga.module.js.map