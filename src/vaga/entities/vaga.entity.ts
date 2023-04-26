import {
  Column,
  DataType,
  Table,
  Model,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CandidatoVaga } from 'src/candidato-vaga/entities/candidato-vaga.entity';
import { Empresario } from 'src/empresario/entities/empresario.entity';

@Table({ tableName: 'Vaga' })
export class Vaga extends Model<Vaga> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Empresario)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: { model: Empresario, key: 'id' },
  })
  empresarioId: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  salario: number;

  @Column({ type: DataType.STRING, allowNull: false })
  formacao: string;

  @Column({ type: DataType.STRING, allowNull: false })
  experiencia: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantidade: number;

  @Column({ type: DataType.STRING, allowNull: false })
  habilidade: string;

  @HasMany((): typeof CandidatoVaga => CandidatoVaga)
  candidatoVaga: CandidatoVaga[];

  @BelongsTo((): typeof Empresario => Empresario)
  empresario: Empresario;
}
