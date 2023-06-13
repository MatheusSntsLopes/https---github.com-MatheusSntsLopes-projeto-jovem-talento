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
exports.EmpresarioService = void 0;
const common_1 = require("@nestjs/common");
const empresario_entity_1 = require("./entities/empresario.entity");
const sequelize_1 = require("@nestjs/sequelize");
const bcrypt = require("bcrypt");
const vaga_entity_1 = require("../vaga/entities/vaga.entity");
let EmpresarioService = class EmpresarioService {
    constructor(empresario) {
        this.empresario = empresario;
    }
    async create(empresarioDto) {
        try {
            const empresarioNovo = Object.assign(Object.assign({}, empresarioDto), { password: await bcrypt.hash(empresarioDto.password, 10) });
            const empresarioCriado = await this.empresario.create(empresarioNovo);
            return empresarioCriado;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findAll() {
        try {
            return this.empresario.findAll({
                attributes: { exclude: ['password', 'email'] },
                include: vaga_entity_1.Vaga,
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findOne(id) {
        const empresarioEncontrado = await this.empresario.findOne({
            where: { id },
            attributes: { exclude: ['password', 'email'] },
            include: vaga_entity_1.Vaga,
        });
        if (!empresarioEncontrado) {
            throw new common_1.NotFoundException('Candidato não encontrado.');
        }
        return empresarioEncontrado;
    }
    async update(id, { email, name, password, cnpj, bairro, cep, cidade, estado, numero, rua, telefone, }) {
        try {
            const empresarioExiste = await this.empresario.findByPk(id, {
                rejectOnEmpty: true,
            });
            if (!empresarioExiste) {
                throw new Error('Empresario não existe');
            }
            await empresarioExiste.update({
                email,
                name,
                password,
                cnpj,
                bairro,
                cep,
                cidade,
                estado,
                numero,
                rua,
                telefone,
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async remove(id) {
        try {
            const empresarioexist = await this.empresario.findByPk(id);
            if (!empresarioexist) {
                throw new Error('Usuario não existe');
            }
            await this.empresario.destroy({ where: { id } });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findByEmail(email) {
        return this.empresario.findOne({ where: { email } });
    }
};
EmpresarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(empresario_entity_1.Empresario)),
    __metadata("design:paramtypes", [Object])
], EmpresarioService);
exports.EmpresarioService = EmpresarioService;
//# sourceMappingURL=empresario.service.js.map