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
exports.CurriculoController = void 0;
const common_1 = require("@nestjs/common");
const curriculo_service_1 = require("./curriculo.service");
const create_curriculo_dto_1 = require("./dto/create-curriculo.dto");
const update_curriculo_dto_1 = require("./dto/update-curriculo.dto");
const jwt_auth_guard_1 = require("../authen/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let CurriculoController = class CurriculoController {
    constructor(curriculoService) {
        this.curriculoService = curriculoService;
    }
    create(createCurriculoDto) {
        return this.curriculoService.create(createCurriculoDto);
    }
    findAll() {
        return this.curriculoService.findAll();
    }
    findOne(id) {
        return this.curriculoService.findOne(+id);
    }
    update(id, updateCurriculoDto) {
        return this.curriculoService.update(+id, updateCurriculoDto);
    }
    remove(id) {
        return this.curriculoService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curriculo_dto_1.CreateCurriculoDto]),
    __metadata("design:returntype", Promise)
], CurriculoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurriculoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CurriculoController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_curriculo_dto_1.UpdateCurriculoDto]),
    __metadata("design:returntype", Promise)
], CurriculoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CurriculoController.prototype, "remove", null);
CurriculoController = __decorate([
    (0, swagger_1.ApiTags)('curriculo'),
    (0, common_1.Controller)('curriculo'),
    __metadata("design:paramtypes", [curriculo_service_1.CurriculoService])
], CurriculoController);
exports.CurriculoController = CurriculoController;
//# sourceMappingURL=curriculo.controller.js.map