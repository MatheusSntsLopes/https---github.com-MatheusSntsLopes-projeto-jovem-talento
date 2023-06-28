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
exports.CurriculoService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const curriculo_entity_1 = require("./entities/curriculo.entity");
const candidato_entity_1 = require("../candidato/entities/candidato.entity");
let CurriculoService = class CurriculoService {
    constructor(curriculo) {
        this.curriculo = curriculo;
    }
    async create(createCurriculoDto) {
        try {
            const curriculoNovo = Object.assign({}, createCurriculoDto);
            const curriculoCriado = await this.curriculo.create(curriculoNovo);
            if (curriculoCriado) {
                throw new common_1.BadRequestException('Candidato ja cadastrou curriculo');
            }
            return curriculoCriado;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findAll() {
        try {
            return this.curriculo.findAll({
                include: {
                    model: candidato_entity_1.Candidato,
                    attributes: [
                        'name',
                        'telefone',
                        'rua',
                        'estado',
                        'cidade',
                        'cep',
                        'bairro',
                        'numero',
                    ],
                },
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findOne(id) {
        try {
            const curriculo = await this.curriculo.findOne({
                where: { id },
                include: {
                    model: candidato_entity_1.Candidato,
                    attributes: [
                        'name',
                        'telefone',
                        'rua',
                        'estado',
                        'cidade',
                        'cep',
                        'data_nascimento',
                        'cpf',
                    ],
                },
            });
            if (!curriculo) {
                throw new common_1.NotFoundException('Curriculo não encontrado.');
            }
            return curriculo;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async update(id, { biografia, formacao, habilidade, competencia, experiencia, }) {
        try {
            const curriculoExiste = await this.curriculo.findByPk(id, {
                rejectOnEmpty: true,
            });
            if (!curriculoExiste) {
                throw new Error('Curriculo não existe');
            }
            const novosDados = await curriculoExiste.update({
                biografia,
                formacao,
                habilidade,
                competencia,
                experiencia,
            });
            return novosDados;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async remove(id) {
        try {
            const curriculo = await this.curriculo.findByPk(id);
            if (!curriculo) {
                throw new Error('Usuario não existe');
            }
            await this.curriculo.destroy({ where: { id } });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
CurriculoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(curriculo_entity_1.Curriculo)),
    __metadata("design:paramtypes", [Object])
], CurriculoService);
exports.CurriculoService = CurriculoService;
//# sourceMappingURL=curriculo.service.js.map