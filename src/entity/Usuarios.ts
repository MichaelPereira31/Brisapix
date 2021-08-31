import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column()
    telefone:string;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_ar:Date;

}
