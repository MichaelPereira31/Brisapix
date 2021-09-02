import {Column,CreateDateColumn,Entity, UpdateDateColumn,ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { Usuarios } from "./Usuarios";

@Entity()
export class Chaves{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    chave:string;

    @ManyToOne(type => Usuarios, chave=>Chaves,{ onUpdate: 'CASCADE' })
    usuario:Usuarios;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;
    

}