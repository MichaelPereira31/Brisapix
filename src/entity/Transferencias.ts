import {Column,OneToOne,JoinColumn, CreateDateColumn, Double, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Usuarios } from "./Usuarios";

@Entity()
export class Transferencia{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    valor:number;

    @OneToOne(type => Usuarios, transferenciasEnviada=>Transferencia)
    @JoinColumn()
    usuarioEnvia:Usuarios;

    @OneToOne(type => Usuarios, transferenciasRecebida=>Transferencia)
    @JoinColumn()
    usuarioRecebe:Usuarios;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;
}

