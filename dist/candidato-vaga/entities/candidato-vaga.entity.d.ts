import { Model } from 'sequelize-typescript';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { Vaga } from 'src/vaga/entities/vaga.entity';
import { STATUS_TIPO } from '../constants/Status.tipo';
export declare class CandidatoVaga extends Model<CandidatoVaga> {
    id: number;
    status: STATUS_TIPO;
    candidatoId: number;
    vagaId: number;
    candidato: Candidato;
    vaga: Vaga;
}
