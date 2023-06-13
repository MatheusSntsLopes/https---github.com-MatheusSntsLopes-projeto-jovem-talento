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
exports.CandidatoService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const sequelize_1 = require("@nestjs/sequelize");
const candidato_entity_1 = require("./entities/candidato.entity");
const curriculo_entity_1 = require("../curriculo/entities/curriculo.entity");
let CandidatoService = class CandidatoService {
    constructor(candidato) {
        this.candidato = candidato;
    }
    async create(candidatoDto) {
        try {
            const data = Object.assign(Object.assign({}, candidatoDto), { password: await bcrypt.hash(candidatoDto.password, 10) });
            const candidatoCriado = await this.candidato.create(data);
            return candidatoCriado;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findAll() {
        try {
            return this.candidato.findAll({
                attributes: { exclude: ['password', 'email', 'cpf'] },
                include: curriculo_entity_1.Curriculo,
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findOne(id) {
        try {
            const candidatoEncontrado = await this.candidato.findOne({
                where: { id },
                attributes: { exclude: ['password', 'email', 'cpf'] },
                include: curriculo_entity_1.Curriculo,
            });
            if (!candidatoEncontrado) {
                throw new common_1.NotFoundException('Candidato não encontrado.');
            }
            return candidatoEncontrado;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async update(id, { email, name, password, cpf, bairro, cep, cidade, estado, numero, rua, telefone, }) {
        try {
            const candidatoExiste = await this.candidato.findByPk(id, {
                rejectOnEmpty: true,
            });
            if (!candidatoExiste) {
                throw new Error('Usuario não existe');
            }
            await candidatoExiste.update({
                email,
                name,
                password,
                cpf,
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
            const candidatoexist = await this.candidato.findByPk(id);
            if (!candidatoexist) {
                throw new Error('Usuario não existe');
            }
            await this.candidato.destroy({ where: { id } });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findByEmail(email) {
        return this.candidato.findOne({ where: { email } });
    }
};
CandidatoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(candidato_entity_1.Candidato)),
    __metadata("design:paramtypes", [Object])
], CandidatoService);
exports.CandidatoService = CandidatoService;
//# sourceMappingURL=candidato.service.js.map