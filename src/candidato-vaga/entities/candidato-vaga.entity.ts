import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Candidato } from 'src/candidato/entities/candidato.entity';
import { Vaga } from 'src/vaga/entities/vaga.entity';
import { STATUS_TIPO } from '../constants/Status.tipo';

@Table({ tableName: 'CandidatoVaga' })
export class CandidatoVaga extends Model<CandidatoVaga> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.ENUM,
    allowNull: true,
    values: Object.values(STATUS_TIPO),
  })
  status?: STATUS_TIPO;

  @ForeignKey((): typeof Candidato => Candidato)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: { model: Candidato, key: 'id' },
  })
  candidatoId: number;

  @ForeignKey((): typeof Vaga => Vaga)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: { model: Vaga, key: 'id' },
  })
  vagaId: number;

  @BelongsTo((): typeof Candidato => Candidato)
  candidato: Candidato;

  @BelongsTo((): typeof Vaga => Vaga)
  vaga: Vaga;
}
