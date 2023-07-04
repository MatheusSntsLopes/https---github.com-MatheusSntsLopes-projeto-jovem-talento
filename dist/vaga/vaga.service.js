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
exports.VagaService = void 0;
const common_1 = require("@nestjs/common");
const vaga_entity_1 = require("./entities/vaga.entity");
const sequelize_1 = require("@nestjs/sequelize");
const empresario_entity_1 = require("../empresario/entities/empresario.entity");
let VagaService = class VagaService {
    constructor(vaga) {
        this.vaga = vaga;
    }
    async create(vagaDto) {
        try {
            const vagaNova = Object.assign({}, vagaDto);
            const vagaCriada = await this.vaga.create(vagaNova);
            return vagaCriada;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findAll() {
        return this.vaga.findAll({
            include: {
                model: empresario_entity_1.Empresario,
                attributes: [
                    'name',
                    'telefone',
                    'rua',
                    'estado',
                    'cidade',
                    'cep',
                    'cnpj',
                    'bairro',
                ],
            },
        });
    }
    async findOne(id) {
        const vagaEncontrada = await this.vaga.findOne({
            where: { id },
            include: {
                model: empresario_entity_1.Empresario,
                attributes: [
                    'name',
                    'telefone',
                    'rua',
                    'estado',
                    'cidade',
                    'cep',
                    'cnpj',
                    'bairro',
                ],
            },
        });
        if (!vagaEncontrada) {
            throw new common_1.NotFoundException('Vaga não encontrada');
        }
        return vagaEncontrada;
    }
    async update(id, { formacao, cargo, quantidade, salario }) {
        try {
            const vagaExiste = await this.vaga.findByPk(id, {
                rejectOnEmpty: true,
            });
            if (!vagaExiste) {
                throw new Error('Vaga não existe');
            }
            const novosDados = await vagaExiste.update({
                formacao,
                cargo,
                quantidade,
                salario,
            });
            return novosDados;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async remove(id) {
        const vagaExiste = await this.vaga.findByPk(id);
        if (!vagaExiste) {
            throw new Error('Vaga não existe');
        }
        await this.vaga.destroy({ where: { id } });
    }
};
VagaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(vaga_entity_1.Vaga)),
    __metadata("design:paramtypes", [Object])
], VagaService);
exports.VagaService = VagaService;
//# sourceMappingURL=vaga.service.js.map