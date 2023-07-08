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
exports.CandidatoVagaService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const candidato_vaga_entity_1 = require("./entities/candidato-vaga.entity");
const candidato_entity_1 = require("../candidato/entities/candidato.entity");
const vaga_entity_1 = require("../vaga/entities/vaga.entity");
let CandidatoVagaService = class CandidatoVagaService {
    constructor(candidatoVaga) {
        this.candidatoVaga = candidatoVaga;
    }
    async create(createCandidatoVagaDto) {
        try {
            const candidatoVagaNovo = Object.assign({}, createCandidatoVagaDto);
            const candidatoCriado = await this.candidatoVaga.create(candidatoVagaNovo);
            return candidatoCriado;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    findAll() {
        try {
            return this.candidatoVaga.findAll({
                include: [
                    {
                        model: candidato_entity_1.Candidato,
                        attributes: ['name', 'telefone', 'rua', 'estado', 'cidade', 'cep'],
                    },
                    vaga_entity_1.Vaga,
                ],
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findOne(id) {
        try {
            const candidatoVagaEncontrado = await this.candidatoVaga.findOne({
                where: { id },
                include: [
                    {
                        model: candidato_entity_1.Candidato,
                        attributes: [
                            'name',
                            'telefone',
                            'rua',
                            'estado',
                            'cidade',
                            'cep',
                        ],
                    },
                    vaga_entity_1.Vaga,
                ],
            });
            if (!candidatoVagaEncontrado) {
                throw new common_1.NotFoundException('Candidato não encontrado.');
            }
            return candidatoVagaEncontrado;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async update(id, { status }) {
        try {
            const candidatoVExiste = await this.candidatoVaga.findByPk(id, {
                rejectOnEmpty: true,
            });
            if (!candidatoVExiste) {
                throw new Error('Usuario não existe');
            }
            const novosDados = await candidatoVExiste.update({
                status,
            });
            return novosDados;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async remove(id) {
        try {
            const candidatoexist = await this.candidatoVaga.findByPk(id);
            if (!candidatoexist) {
                throw new Error('CandidatoVaga não existe');
            }
            await this.candidatoVaga.destroy({ where: { id } });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findCandidato(vagaId) {
        try {
            const vagaCandidato = await this.candidatoVaga.findOne({
                where: { vagaId },
                include: [
                    {
                        model: candidato_entity_1.Candidato,
                        attributes: ['name'],
                    },
                ],
            });
            return vagaCandidato;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findAllCandidatoVaga(candidatoId) {
        try {
            const candidatoVaga = await this.candidatoVaga.findAll({
                where: { candidatoId },
                include: [
                    {
                        model: vaga_entity_1.Vaga,
                    },
                ],
            });
            return candidatoVaga;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findAllVagaCandidato(vagaId) {
        try {
            const candidatoVaga = await this.candidatoVaga.findAll({
                where: { vagaId },
                include: [
                    {
                        model: candidato_entity_1.Candidato,
                        attributes: [
                            'name',
                            'cpf',
                            'telefone',
                            'estado',
                            'cidade',
                            'cep',
                            'bairro',
                            'rua',
                        ],
                    },
                ],
            });
            return candidatoVaga;
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
CandidatoVagaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(candidato_vaga_entity_1.CandidatoVaga)),
    __metadata("design:paramtypes", [Object])
], CandidatoVagaService);
exports.CandidatoVagaService = CandidatoVagaService;
//# sourceMappingURL=candidato-vaga.service.js.map