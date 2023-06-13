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
exports.EmpresarioController = void 0;
const common_1 = require("@nestjs/common");
const empresario_service_1 = require("./empresario.service");
const create_empresario_dto_1 = require("./dto/create-empresario.dto");
const update_empresario_dto_1 = require("./dto/update-empresario.dto");
const jwt_auth_guard_1 = require("../authen/guards/jwt-auth.guard");
let EmpresarioController = class EmpresarioController {
    constructor(empresarioService) {
        this.empresarioService = empresarioService;
    }
    create(createEmpresarioDto) {
        return this.empresarioService.create(createEmpresarioDto);
    }
    findAll() {
        return this.empresarioService.findAll();
    }
    findOne(id) {
        return this.empresarioService.findOne(+id);
    }
    update(id, updateEmpresarioDto) {
        return this.empresarioService.update(+id, updateEmpresarioDto);
    }
    remove(id) {
        return this.empresarioService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_empresario_dto_1.CreateEmpresarioDto]),
    __metadata("design:returntype", Promise)
], EmpresarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmpresarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpresarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_empresario_dto_1.UpdateEmpresarioDto]),
    __metadata("design:returntype", Promise)
], EmpresarioController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpresarioController.prototype, "remove", null);
EmpresarioController = __decorate([
    (0, common_1.Controller)('empresario'),
    __metadata("design:paramtypes", [empresario_service_1.EmpresarioService])
], EmpresarioController);
exports.EmpresarioController = EmpresarioController;
//# sourceMappingURL=empresario.controller.js.map