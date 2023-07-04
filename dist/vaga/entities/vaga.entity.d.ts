import { Model } from 'sequelize-typescript';
import { CandidatoVaga } from 'src/candidato-vaga/entities/candidato-vaga.entity';
import { Empresario } from 'src/empresario/entities/empresario.entity';
export declare class Vaga extends Model<Vaga> {
    id: number;
    empresarioId: number;
    salario: number;
    formacao: string;
    quantidade: number;
    cargo: string;
    candidatoVaga: CandidatoVaga[];
    empresario: Empresario;
}
