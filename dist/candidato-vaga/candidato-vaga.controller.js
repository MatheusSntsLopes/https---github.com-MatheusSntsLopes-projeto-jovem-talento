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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatoVagaController = void 0;
const common_1 = require("@nestjs/common");
const candidato_vaga_service_1 = require("./candidato-vaga.service");
const create_candidato_vaga_dto_1 = require("./dto/create-candidato-vaga.dto");
const update_candidato_vaga_dto_1 = require("./dto/update-candidato-vaga.dto");
const jwt_auth_guard_1 = require("../authen/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let CandidatoVagaController = class CandidatoVagaController {
    constructor(candidatoVagaService) {
        this.candidatoVagaService = candidatoVagaService;
    }
    create(createCandidatoVagaDto) {
        return this.candidatoVagaService.create(createCandidatoVagaDto);
    }
    findAll() {
        return this.candidatoVagaService.findAll();
    }
    findOne(id) {
        return this.candidatoVagaService.findOne(+id);
    }
    update(id, updateCandidatoVagaDto) {
        return this.candidatoVagaService.update(+id, updateCandidatoVagaDto);
    }
    remove(id) {
        return this.candidatoVagaService.remove(+id);
    }
    findCandidato(vagaId) {
        return this.candidatoVagaService.findCandidato(+vagaId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidato_vaga_dto_1.CreateCandidatoVagaDto]),
    __metadata("design:returntype", Promise)
], CandidatoVagaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatoVagaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatoVagaController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidato_vaga_dto_1.UpdateCandidatoVagaDto]),
    __metadata("design:returntype", Promise)
], CandidatoVagaController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CandidatoVagaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('vaga/:vagaId'),
    __param(0, (0, common_1.Param)('vagaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatoVagaController.prototype, "findCandidato", null);
CandidatoVagaController = __decorate([
    (0, swagger_1.ApiTags)('candidato-vaga'),
    (0, common_1.Controller)('candidato-vaga'),
    __metadata("design:paramtypes", [candidato_vaga_service_1.CandidatoVagaService])
], CandidatoVagaController);
exports.CandidatoVagaController = CandidatoVagaController;
//# sourceMappingURL=candidato-vaga.controller.js.map