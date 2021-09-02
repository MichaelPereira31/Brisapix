import {Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Chaves } from "./Chaves";
import { Transferencia } from "./Transferencias";

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

    @OneToOne(type => Transferencia, usuarioEnvia=>Usuarios)
    transferenciasEnviada:Transferencia;

    @OneToOne(type => Transferencia, usuarioRecebe=>Usuarios)
    transferenciasRecebida:Transferencia;
    

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;

}
