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
exports.CandidatoController = void 0;
const common_1 = require("@nestjs/common");
const candidato_service_1 = require("./candidato.service");
const create_candidato_dto_1 = require("./dto/create-candidato.dto");
const update_candidato_dto_1 = require("./dto/update-candidato.dto");
const jwt_auth_guard_1 = require("../authen/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let CandidatoController = class CandidatoController {
    constructor(candidatoService) {
        this.candidatoService = candidatoService;
    }
    create(createCandidatoDto) {
        return this.candidatoService.create(createCandidatoDto);
    }
    findAll() {
        return this.candidatoService.findAll();
    }
    findOne(id) {
        return this.candidatoService.findOne(+id);
    }
    update(id, updateCandidatoDto) {
        return this.candidatoService.update(+id, updateCandidatoDto);
    }
    remove(id) {
        return this.candidatoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidato_dto_1.CreateCandidatoDto]),
    __metadata("design:returntype", void 0)
], CandidatoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidatoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CandidatoController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidato_dto_1.UpdateCandidatoDto]),
    __metadata("design:returntype", void 0)
], CandidatoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CandidatoController.prototype, "remove", null);
CandidatoController = __decorate([
    (0, swagger_1.ApiTags)('candidato'),
    (0, common_1.Controller)('candidato'),
    __metadata("design:paramtypes", [candidato_service_1.CandidatoService])
], CandidatoController);
exports.CandidatoController = CandidatoController;
//# sourceMappingURL=candidato.controller.js.map