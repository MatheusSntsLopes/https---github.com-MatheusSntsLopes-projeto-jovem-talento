import { Model } from 'sequelize-typescript';
import { Candidato } from 'src/candidato/entities/candidato.entity';
export declare class Curriculo extends Model<Curriculo> {
    id: number;
    candidatoId: number;
    biografia: string;
    formacao: string;
    experiencia: string;
    competencia: string;
    habilidade: string;
    candidato: Candidato;
}
