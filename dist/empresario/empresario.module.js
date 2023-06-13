"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresarioModule = void 0;
const common_1 = require("@nestjs/common");
const empresario_service_1 = require("./empresario.service");
const empresario_controller_1 = require("./empresario.controller");
const sequelize_1 = require("@nestjs/sequelize");
const empresario_entity_1 = require("./entities/empresario.entity");
let EmpresarioModule = class EmpresarioModule {
};
EmpresarioModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([empresario_entity_1.Empresario])],
        controllers: [empresario_controller_1.EmpresarioController],
        providers: [empresario_service_1.EmpresarioService],
        exports: [empresario_service_1.EmpresarioService],
    })
], EmpresarioModule);
exports.EmpresarioModule = EmpresarioModule;
//# sourceMappingURL=empresario.module.js.map