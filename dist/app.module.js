"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const candidato_module_1 = require("./candidato/candidato.module");
const curriculo_module_1 = require("./curriculo/curriculo.module");
const empresario_module_1 = require("./empresario/empresario.module");
const vaga_module_1 = require("./vaga/vaga.module");
const candidato_vaga_module_1 = require("./candidato-vaga/candidato-vaga.module");
const sequelize_1 = require("@nestjs/sequelize");
const candidato_entity_1 = require("./candidato/entities/candidato.entity");
const curriculo_entity_1 = require("./curriculo/entities/curriculo.entity");
const empresario_entity_1 = require("./empresario/entities/empresario.entity");
const vaga_entity_1 = require("./vaga/entities/vaga.entity");
const candidato_vaga_entity_1 = require("./candidato-vaga/entities/candidato-vaga.entity");
const authen_module_1 = require("./authen/authen.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'babar.db.elephantsql.com',
                port: 5432,
                username: 'uxlerkgl',
                password: 'P2_NzkJ2tetr1ZdzQuTGoUeMqSVLx0dC',
                database: 'uxlerkgl',
                autoLoadModels: true,
                synchronize: true,
                models: [candidato_entity_1.Candidato, curriculo_entity_1.Curriculo, empresario_entity_1.Empresario, vaga_entity_1.Vaga, candidato_vaga_entity_1.CandidatoVaga],
            }),
            candidato_module_1.CandidatoModule,
            curriculo_module_1.CurriculoModule,
            empresario_module_1.EmpresarioModule,
            vaga_module_1.VagaModule,
            candidato_vaga_module_1.CandidatoVagaModule,
            authen_module_1.AuthenModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map