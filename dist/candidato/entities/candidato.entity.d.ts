import { Model } from 'sequelize-typescript';
import { CandidatoVaga } from 'src/candidato-vaga/entities/candidato-vaga.entity';
import { Curriculo } from 'src/curriculo/entities/curriculo.entity';
import { Tipo } from '../constants/Tipo';
export declare class Candidato extends Model<Candidato> {
    id: number;
    name: string;
    cpf: string;
    data_nascimento: Date;
    email: string;
    password: string;
    telefone: string;
    estado: string;
    tipo: Tipo;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    cep: number;
    candidatoVaga: CandidatoVaga[];
    curriculo: Curriculo;
}
