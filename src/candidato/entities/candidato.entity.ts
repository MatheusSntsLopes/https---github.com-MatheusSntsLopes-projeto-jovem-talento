import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { CandidatoVaga } from 'src/candidato-vaga/entities/candidato-vaga.entity';
import { Curriculo } from 'src/curriculo/entities/curriculo.entity';

@Table({ tableName: 'Candidato' })
export class Candidato extends Model<Candidato> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  cpf: string;

  @Column({ type: DataType.DATE, allowNull: true })
  data_nascimento?: Date;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  telefone: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  estado: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  cidade: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  bairro: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  rua: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  numero: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  cep: number;

  @HasMany((): typeof CandidatoVaga => CandidatoVaga)
  candidatoVaga: CandidatoVaga[];

  @HasOne((): typeof Curriculo => Curriculo)
  curriculo: Curriculo;
}
