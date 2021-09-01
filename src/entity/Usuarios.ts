import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Chaves } from "./Chaves";

@Entity()
export class Usuarios{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column()
    telefone:string;

    @OneToMany(type => Chaves, usurio=>Usuarios)
    chave:Chaves;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;

}
