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
exports.VagaController = void 0;
const common_1 = require("@nestjs/common");
const vaga_service_1 = require("./vaga.service");
const create_vaga_dto_1 = require("./dto/create-vaga.dto");
const update_vaga_dto_1 = require("./dto/update-vaga.dto");
const jwt_auth_guard_1 = require("../authen/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let VagaController = class VagaController {
    constructor(vagaService) {
        this.vagaService = vagaService;
    }
    create(createVagaDto) {
        return this.vagaService.create(createVagaDto);
    }
    findAll() {
        return this.vagaService.findAll();
    }
    findOne(id) {
        return this.vagaService.findOne(+id);
    }
    update(id, updateVagaDto) {
        return this.vagaService.update(+id, updateVagaDto);
    }
    remove(id) {
        return this.vagaService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vaga_dto_1.CreateVagaDto]),
    __metadata("design:returntype", void 0)
], VagaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VagaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VagaController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vaga_dto_1.UpdateVagaDto]),
    __metadata("design:returntype", void 0)
], VagaController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VagaController.prototype, "remove", null);
VagaController = __decorate([
    (0, swagger_1.ApiTags)('vaga'),
    (0, common_1.Controller)('vaga'),
    __metadata("design:paramtypes", [vaga_service_1.VagaService])
], VagaController);
exports.VagaController = VagaController;
//# sourceMappingURL=vaga.controller.js.map