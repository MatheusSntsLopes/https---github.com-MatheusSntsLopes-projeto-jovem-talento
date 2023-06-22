import { Model } from 'sequelize-typescript';
import { Vaga } from 'src/vaga/entities/vaga.entity';
import { Tipo } from '../constants/Tipo';
export declare class Empresario extends Model<Empresario> {
    id: number;
    name: string;
    cnpj: string;
    data_nascimento?: Date;
    tipo: Tipo;
    email: string;
    password: string;
    telefone: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    cep: number;
    vaga: Vaga;
}
