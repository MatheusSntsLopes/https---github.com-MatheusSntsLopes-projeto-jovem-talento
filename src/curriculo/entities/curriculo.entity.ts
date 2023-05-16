import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Candidato } from 'src/candidato/entities/candidato.entity';

@Table({ tableName: 'Curriculo' })
export class Curriculo extends Model<Curriculo> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @ForeignKey((): typeof Candidato => Candidato)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: { model: Candidato, key: 'id' },
  })
  candidatoId: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  biografia: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  formacao: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  experiencia: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  competencia: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  habilidade: string;

  @BelongsTo((): typeof Candidato => Candidato)
  candidato: Candidato;
}
